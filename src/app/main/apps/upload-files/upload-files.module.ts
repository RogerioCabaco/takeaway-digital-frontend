// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { FileService } from './file.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

// This Module's Components
import { UploadFilesComponent } from './upload-files.component';
import { MatIconModule } from '@angular/material/icon';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
    imports: [
        DialogModule,
        CommonModule,
        TabViewModule,
        ConfirmDialogModule,
        MatIconModule,
        TooltipModule
    ],
    declarations: [
        UploadFilesComponent,
    ],
    exports: [
        UploadFilesComponent,
    ],
    providers: [
        FileService
    ]
})
export class UploadFilesModule {

}
