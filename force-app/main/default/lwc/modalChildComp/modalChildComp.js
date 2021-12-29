import { LightningElement, api } from 'lwc';

export default class ModalChildComp extends LightningElement {
    @api headerText;
    @api bodyText;
    closeHandler() {
        this.dispatchEvent(new CustomEvent('close'));
    }


}