import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValueEntitie } from '../ValueEntitie';

export class UserForm extends FormGroup {
    constructor(user: UserDto = null) {
        super({});
        this.addControl('firstName', new FormControl(user ? user.firstName : '', Validators.required));
        this.addControl('lastName', new FormControl(user ? user.lastName : '', Validators.required));
        this.addControl('email', new FormControl(user ? user.email : '', [Validators.required, Validators.email]));
        this.addControl('password', new FormControl(user ? user.password : '', Validators.required));
        this.addControl('roles', new FormControl(user ? user.roles : null, Validators.required));
        this.addControl('client', new FormControl(user ? user.client : null));
    }
}
export interface UserDto {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    roles: ValueEntitie[],
    client: ValueEntitie,
}