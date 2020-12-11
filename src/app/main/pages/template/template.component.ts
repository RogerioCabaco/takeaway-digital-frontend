import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from 'app/main/apps/upload-files/file.service';
import { Template } from 'app/models/Template';
import { TemplateService } from 'app/services/template.service';

@Component({
    selector: 'template-view',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
    newTemplateFlag = false;
    templateToEdit: Template;
    /**
     * Constructor
     */
    constructor(public templateService: TemplateService, private router: Router, private fileService: FileService) {
    }

    ngOnInit() {
        //this.fileService.uploadDisplay = true;
        this.loadTemplates();
    }

    showTemplateEdition(templateToEdit = null) {
        this.newTemplateFlag = true;
        this.templateToEdit = templateToEdit;
    }
    closeTemplateEdition(needsToReload: boolean) {
        this.newTemplateFlag = false;
        if (this.templateToEdit) this.templateToEdit = null;
        if (needsToReload) {
            this.loadTemplates();
        }
    }

    loadTemplates() {
        this.templateService.getAll().subscribe(
            (data: Template[]) => {
                this.templateService.templates = data;
                console.log(data);
            },
            (error) => {
                console.log(error);
            },
        )
    }

    startUsingTemplate(template: Template) {
        this.templateService.templates.forEach(element => {
            element.isClientTemplate = false;
        });
        template.isClientTemplate = true;
        this.configureTemplate(template);
    }

    configureTemplate(template: Template) {
        this.templateService.canShowTemplateEdition = true;
        this.router.navigate([`/pages/template-edition/${template.id}`]);
    }
}
