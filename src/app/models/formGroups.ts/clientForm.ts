import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValueEntitie } from '../ValueEntitie';

export class ClientForm extends FormGroup {
    constructor(client: ClientDto = null) {
        super({});
        this.addControl('id', new FormControl(client ? client.id : null));
        this.addControl('companyName', new FormControl(client ? client.companyName : '', Validators.required));
        this.addControl('taxNumber', new FormControl(client ? client.taxNumber : '', Validators.required));
        this.addControl('companyEmail', new FormControl(client ? client.companyEmail : '', [Validators.required, Validators.email]));
        this.addControl('fullAddress', new FormControl(client ? client.fullAddress : '', Validators.required));
        this.addControl('location', new FormControl(client ? client.location : '', Validators.required));
        this.addControl('zipCode', new FormControl(client ? client.zipCode : '', Validators.required));
        this.addControl('companyPhone', new FormControl(client ? client.companyPhone : '', Validators.required));
    }
}
export interface ClientDto {
    id: number,
    companyName: string,
    taxNumber: string,
    fullAddress: string,
    location: string,
    zipCode: string,
    companyPhone: string,
    companyEmail: string,
    logoPath: string,
    modifiedBy: string,
}