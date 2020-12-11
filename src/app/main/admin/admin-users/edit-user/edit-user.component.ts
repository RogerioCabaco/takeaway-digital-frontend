import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDto, UserForm } from 'app/models/formGroups.ts/userForm';
import { AdminService } from 'app/services/admin.service';
import { Role } from '../new-user/new-user.component';

@Component({
    selector: 'edit-user',
    templateUrl: 'edit-user.component.html',
    styleUrls: ['edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
    @Input() userId: number;
    @Output() closeEvent = new EventEmitter();
    @Output() userEdited = new EventEmitter();

    userForm;

    constructor(public adminService: AdminService) {
    }

    ngOnInit() {
        this.adminService.getUserById(this.userId).subscribe(
            (user: UserDto) => {
                this.userForm = new UserForm(user);
                this.userForm.removeControl('password');
            },
            (error) => {
                console.log(error);
            }
        );
        this.adminService.getAllRoles();
        this.adminService.getAllClients();
    }

    close() {
        this.closeEvent.emit();
    }

    editUser() {
        console.log(this.userForm.value);
        if (this.userForm.valid) {
            this.adminService.editUser(this.userForm.value).subscribe(
                (success) => {
                    this.userEdited.emit();
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }
}
