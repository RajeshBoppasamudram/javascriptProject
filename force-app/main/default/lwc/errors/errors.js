import { LightningElement, api, wire } from 'lwc';
import { reduceErrors} from 'c/ldUtils';
import getRelatedContacts from '@salesforce/apex/AccountController.getRelatedContacts'

export default class Errors extends LightningElement {
    @api recordId;
    @wire (getRelatedContacts, 
        { accountId: '$recordId'})
        contacts;
        get errors() {
            return (this.contacts.error) ? reduceErrors(this.contacts.error): [];
        }
}