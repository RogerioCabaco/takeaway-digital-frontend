import { Component, EventEmitter, Output } from '@angular/core';
import { ClientForm } from 'app/models/formGroups.ts/clientForm';
import { AdminService } from 'app/services/admin.service';

@Component({
    selector: 'new-client',
    templateUrl: 'new-client.component.html',
    styleUrls: ['new-client.component.scss']
})
export class NewClientComponent {
    @Output() closeEvent = new EventEmitter();
    @Output() clientCreated = new EventEmitter();

    clientForm = new ClientForm();

    constructor(private adminService: AdminService) { }

    close() {
        this.closeEvent.emit();
    }

    createClient() {
        console.log(this.clientForm.value);
        if (this.clientForm.valid) {
            this.adminService.createClient(this.clientForm.value).subscribe(
                (success) => {
                    this.clientCreated.emit();
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }
}
