import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientDto } from 'app/models/formGroups.ts/clientForm';
import { UserDto } from 'app/models/formGroups.ts/userForm';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root",
})
export class AdminService {
    apiUrl = `${environment.apiUrl}/admin`;

    private allRolesSubject = new BehaviorSubject<any>([]);
    allRoles = this.allRolesSubject.asObservable();

    private allClientsSubject = new BehaviorSubject<any>([]);
    allClients = this.allClientsSubject.asObservable();

    constructor(
        private http: HttpClient
    ) { }

    getUserById(id: number) {
        return this.http.get(`${this.apiUrl}/user/${id}`);
    }

    getAllUsers() {
        return this.http.get(`${this.apiUrl}/users`);
    }

    getAllRoles() {
        return this.http.get(`${this.apiUrl}/roles`).subscribe(l => this.allRolesSubject.next(l));
    }

    getAllClients() {
        return this.http.get(`${this.apiUrl}/clients`).subscribe(l => this.allClientsSubject.next(l));
    }

    createUser(user: UserDto) {
        return this.http.post(`${this.apiUrl}/registerUser`, user);
    }
    editUser(user: UserDto) {
        return this.http.put(`${this.apiUrl}/editUser`, user);
    }

    createClient(client: ClientDto) {
        return this.http.post(`${this.apiUrl}/registerClient`, client);
    }

    editClient(client: ClientDto) {
        return this.http.put(`${this.apiUrl}/editClient`, client);
    }

    getClientsList() {
        return this.http.get(`${this.apiUrl}/clientsToList`);
    }

    getClientById(id: number) {
        return this.http.get(`${this.apiUrl}/client/${id}`);
    }
}