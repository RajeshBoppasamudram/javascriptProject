import {LightningElement} from 'lwc';
export default class App extends LightningElement{
    name = 'Electra X4';
    description = 'Desc';
    category = 'Mountain';
    material = 'Steel';
    price = $4343;
    pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
    ready = false;

    
    connectedCallback() {
        setTimeout(() => {
            this.ready = true;
        }, 3000);
    }
}