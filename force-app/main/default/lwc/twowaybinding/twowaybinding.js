import { LightningElement ,track} from 'lwc';

export default class Twowaybinding extends LightningElement {
    @track name = 'Nikhil karkra';
    @track title = 'Salesforce developer';

    changeHandler(event){
        console.log('event==',event);
        this[event.target.name] = event.target.value
    }

}