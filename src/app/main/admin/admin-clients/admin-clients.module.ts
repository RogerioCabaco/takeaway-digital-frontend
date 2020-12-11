// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { DataTitleModule } from 'app/components/data-title/data-title.module';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { NewClientComponent } from './new-client/new-client.component';

// This Module's Components
const routes: Routes = [
    {
        path: '',
        component: ClientsListComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        DataTitleModule,
        TableModule,
        MatIconModule,
        DialogModule,
        ReactiveFormsModule
    ],
    declarations: [
        ClientsListComponent,
        NewClientComponent,
        EditClientComponent
    ],
    bootstrap: [
        NewClientComponent,
        EditClientComponent
    ]
})
export class AdminClientsModule {

}
