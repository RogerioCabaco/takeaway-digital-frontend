import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/services/admin.service';
import { TableItem } from 'dto/TableItem';

@Component({
    selector: 'clients-list',
    templateUrl: 'clients-list.component.html',
    styleUrls: ['clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
    clients;
    clientsCols: TableItem[] = [
        { label: 'Nome', value: 'companyName' },
        { label: 'Telefone', value: 'companyPhone' },
        { label: 'Email', value: 'companyEmail' },
        { label: 'Número fiscal', value: 'taxNumber' },
        { label: 'Alterado por', value: 'modifiedBy' }
    ];
    loadingData = false;
    showNewClientModal = false;
    showClientEditionModal = false;
    activeClientId;

    constructor(private adminService: AdminService) { }

    ngOnInit() {
        this.loadAllClients();
    }

    loadAllClients() {
        this.adminService.getClientsList().subscribe(
            (data) => {
                console.log('allClients', data);
                this.clients = data;
            },
            (error) => {
                console.log('error', error);
            }
        )
    }

    startclientEdition(id: number) {
        this.activeClientId = id;
        this.showClientEditionModal = true;
    }

    clientEditedSubscribe() {
        this.showClientEditionModal = false;
        this.loadAllClients();
    }

    clientCreatedSubscribe() {
        this.showNewClientModal = false;
        this.loadAllClients();
    }
}
