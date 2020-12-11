import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserForm } from 'app/models/formGroups.ts/userForm';
import { AdminService } from 'app/services/admin.service';

@Component({
    selector: 'new-user',
    templateUrl: 'new-user.component.html',
    styleUrls: ['new-user.component.scss']
})
export class NewUserComponent implements OnInit {
    @Output() closeEvent = new EventEmitter();
    @Output() userCreated = new EventEmitter();

    userForm = new UserForm();

    constructor(public adminService: AdminService) {
    }

    ngOnInit() {
        this.adminService.getAllRoles();
        this.adminService.getAllClients();
    }
    close() {
        this.closeEvent.emit();
    }

    createUser() {
        console.log(this.userForm.value);
        if (this.userForm.valid) {
            this.adminService.createUser(this.userForm.value).subscribe(
                (success) => {
                    this.userCreated.emit();
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }
}
export interface Role {
    id: number,
    name: string,
    removed: boolean
}