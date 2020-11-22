import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from 'app/models/Template';
import { TemplateService } from '../template.service';

@Component({
    selector: 'template-view',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
    /**
     * Constructor
     */
    constructor(public templateService: TemplateService, private router: Router) {
    }

    startUsingTemplate(template: Template) {
        this.templateService.templates.forEach(element => {
            element.isClientTemplate = false;
        });
        template.isClientTemplate = true;
        this.configureTemplate(template);
    }

    configureTemplate(template: Template) {
        this.templateService.activeTemplate = template;
        this.router.navigate(['/pages/templateEdition']);
    }
}
