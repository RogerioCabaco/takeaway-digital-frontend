// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { FuseHighlightModule, FuseSidebarModule } from '@fuse/components';
import { TemplateService } from '../template.service';
// This Module's Components
import { TemplateComponent } from './template.component';
const routes: Routes = [
    {
        path: 'templates',
        component: TemplateComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSidebarModule,
        CommonModule,
        FuseHighlightModule,
        MatIconModule
    ],
    declarations: [
        TemplateComponent,
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
