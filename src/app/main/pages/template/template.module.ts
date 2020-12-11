// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { FuseHighlightModule, FuseSidebarModule } from '@fuse/components';
import { TemplateService } from 'app/services/template.service';
import { NewTemplateDialog } from './new-template/new-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// This Module's Components
import { TemplateComponent } from './template.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

const routes: Routes = [
    {
        path: 'templates',
        component: TemplateComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        AccordionModule,
        CheckboxModule,
        FuseSidebarModule,
        CommonModule,
        FuseHighlightModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        DialogModule,
        ButtonModule,
        InputNumberModule,
        InputTextModule,
        InputTextareaModule,
        MultiSelectModule,
        DropdownModule
    ],
    declarations: [
        TemplateComponent,
        NewTemplateDialog
    ],
    exports: [
        TemplateComponent,
    ],
    providers: [
        TemplateService
    ]
})
export class TemplateViewModule {

}
