import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientDto, ClientForm } from 'app/models/formGroups.ts/clientForm';
import { AdminService } from 'app/services/admin.service';

@Component({
    selector: 'edit-client',
    templateUrl: 'edit-client.component.html',
    styleUrls: ['edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
    @Input() clientId: number;
    @Output() closeEvent = new EventEmitter();
    @Output() clientEdited = new EventEmitter();

    clientForm;

    constructor(public adminService: AdminService) {
    }

    ngOnInit() {
        this.adminService.getClientById(this.clientId).subscribe(
            (client: ClientDto) => {
                this.clientForm = new ClientForm(client);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    close() {
        this.closeEvent.emit();
    }

    updateClient() {
        console.log(this.clientForm.value);
        if (this.clientForm.valid) {
            this.adminService.editClient(this.clientForm.value).subscribe(
                (success) => {
                    this.clientEdited.emit();
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }
}
