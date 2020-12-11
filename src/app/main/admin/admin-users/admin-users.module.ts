// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

// This Module's Components
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DataTitleModule } from 'app/components/data-title/data-title.module';
import { DialogModule } from 'primeng/dialog';
import { NewUserComponent } from './new-user/new-user.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
    {
        path: '',
        component: UsersListComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        TableModule,
        DataTitleModule,
        DialogModule,
        ButtonModule,
        ReactiveFormsModule,
        MultiSelectModule,
        DropdownModule,
        TooltipModule,
        MatIconModule
    ],
    declarations: [
        UsersListComponent,
        NewUserComponent,
        EditUserComponent
    ],
    bootstrap: [
        NewUserComponent,
        EditUserComponent
    ]
})
export class AdminUsersModule {

}
