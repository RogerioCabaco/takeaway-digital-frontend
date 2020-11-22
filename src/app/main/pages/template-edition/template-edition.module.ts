// Angular Imports
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FuseDemoModule, FuseSidebarModule, FuseWidgetModule } from '@fuse/components';
import { FuseDemoSidebarComponent } from '@fuse/components/demo/demo-sidebar/demo-sidebar.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WindowComponent } from './external-window/preview';
import { TemplateEditionPagesSidebarComponent } from './template-edition-pages-sidebar/template-edition-pages-sidebar.component';
import { MatGridListModule } from '@angular/material/grid-list';

// This Module's Components
import { TemplateEditionComponent } from './template-edition.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
        path: 'templateEdition',
        component: TemplateEditionComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        MatListModule,
        MatCardModule,
        MatProgressBarModule,
        MatGridListModule,
        NgxChartsModule,

        FuseSharedModule,
        FuseSidebarModule,
        FuseWidgetModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,

        FuseDemoModule
    ],
    declarations: [
        TemplateEditionComponent,
        TemplateEditionPagesSidebarComponent,
        WindowComponent
    ],
    exports: [
        TemplateEditionComponent,
    ]
})
export class TemplateEditionModule {

}
