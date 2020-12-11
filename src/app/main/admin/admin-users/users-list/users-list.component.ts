import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/services/admin.service';
import { TableItem } from 'dto/TableItem';

@Component({
    selector: 'users-list',
    templateUrl: 'users-list.component.html',
    styleUrls: ['users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    users;
    usersCols: TableItem[] = [
        { label: 'Nome', value: 'name' },
        { label: 'Email', value: 'email' },
        { label: 'Cliente', value: 'client' },
        { label: 'Roles', value: 'roles' }
    ];
    loadingData = false;
    showNewUserModal = false;
    showUserEditionModal = false;
    activeUserId;

    constructor(private adminService: AdminService) {
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    loadAllUsers() {
        this.adminService.getAllUsers().subscribe(
            (data) => {
                console.log('allUsers', data);
                this.users = data;
            },
            (error) => {
                console.log('error', error);
            }
        )
    }

    startUserEdition(userId: number) {
        this.activeUserId = userId;
        this.showUserEditionModal = true;
    }

    userCreatedSubscribe() {
        this.showNewUserModal = false;
        this.loadAllUsers();
    }
    userEditedSubscribe() {
        this.showUserEditionModal = false;
        this.loadAllUsers();
    }
}
