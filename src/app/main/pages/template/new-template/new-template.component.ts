import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormArray } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';

import { FileService } from 'app/main/apps/upload-files/file.service';
import { TemplateEditionForm, TemplateInfoGroupForm } from 'app/models/formGroups.ts/template-editionForm';
import { Language, Template } from 'app/models/Template';
import { DomainService } from 'app/services/domain.service';
import { TemplateService } from 'app/services/template.service';
import { environment } from 'environments/environment';


@Component({
    selector: 'new-template-dialog',
    templateUrl: './new-template.component.html',
    styleUrls: ['./new-template.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})

export class NewTemplateDialog implements OnInit {
    @Input() template: Template;
    @Output() closeEvent = new EventEmitter<boolean>();
    apiUrl = environment.apiUrl;
    form: TemplateEditionForm;
    value1

    activePageIndex;
    activeSectionIndex;
    activeInfoGroupIndex;

    languagesToRemove: Language[] = [];

    get pagesAvailable() {
        return (this.form.controls['pages'] as FormArray).controls;
    }

    // get getSections() {
    //     return ((this.activePage as FormGroup).controls['sections'] as FormArray).controls;
    // }
    // get getInfoGroups() {
    //     return ((this.activeSection as FormGroup).controls['info_Groups'] as FormArray).controls;
    // }

    constructor(
        private templateService: TemplateService,
        private fileService: FileService,
        public domainService: DomainService
    ) { }

    ngOnInit() {
        if (this.template) {
            this.templateService.getById(this.template.id).subscribe(
                (data: Template) => {
                    this.template = data;
                    console.log('template BD', data);
                    this.form = new TemplateEditionForm(this.template);

                    console.log('form', this.form);
                    this.setActiveElements();
                },
                (error) => {
                    console.log(error);
                }
            );
        }
        else {
            this.form = new TemplateEditionForm();
            this.addTemplatePage();
            this.setActiveElements();
        }
    }

    getPages() {
        return (this.form.controls['pages'] as FormArray).controls;
    }
    getSections(page) {
        const x = page.controls['sections'];
        return x.controls;
    }
    getInfoGroups(section) {
        return section.controls['info_Groups'].controls;
    }

    setActiveElements() {
        this.activePageIndex = 0;
        this.activeSectionIndex = 0;
        this.activeInfoGroupIndex = 0;
        console.log('creationForm', this.form);
    }


    createTemplate() {
        console.log('submetendo', this.form.value);
        if (this.languagesToRemove.length > 0) {
            this.languagesToRemove.forEach(l => {
                this.form.value.languages.push(l);
            });
        }
        this.templateService.insert(this.form.value).subscribe(
            (success) => {
                console.log('success', success);
                this.close(true)
            },
            (error) => {
                console.log('error', error);
            },
        );

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    roger(event) {
        console.log(event);
        const language: Language = event.itemValue;
        const languageToRemove: Language = this.languagesToRemove.find(l => l.id === language.id);
        const DBlanguage: Language = this.template.languages.find(l => l.id === language.id);
        if (!event.value.find(l => l.id === language.id)
            && !languageToRemove
            && DBlanguage) {
            language.removed = true;
            this.languagesToRemove.push(language);
        }
        else if (DBlanguage && languageToRemove) {
            language.removed = false;
            this.languagesToRemove.splice(this.languagesToRemove.findIndex(l => l.id == languageToRemove.id), 1);
        }
    }
    removeText(infoGroup: TemplateInfoGroupForm, index: number) {
        infoGroup.removeText(index);
    }
    addText(infoGroup: TemplateInfoGroupForm) {
        infoGroup.addText();
    }
    addTemplatePage() {
        this.form.addPage();
        this.activePageIndex = ((this.form.controls['pages'] as FormArray).controls.length - 1);
    }
    addTemplateSection(page) {
        page.addSection();
        this.activeSectionIndex = (page.controls['sections'].controls.length - 1);
    }
    addTemplateInfoGroup(section) {
        section.addInfoGroup();
        this.activeInfoGroupIndex = (section.controls['info_Groups'].controls.length - 1);
    }
    removeTemplatePage(i: number) {
        (this.form.controls['pages'] as FormArray).removeAt(i);
        this.activePageIndex = i;
    }
    removeTemplateSection(i: number, page) {
        page.controls['sections'].removeAt(i);
        this.activeSectionIndex = i;
    }
    removeTemplateInfoGroup(i: number, section) {
        section.controls['info_Groups'].removeAt(i);
        this.activeInfoGroupIndex = i;
    }


    close(needsToReload) {
        this.closeEvent.emit(needsToReload);
    }
    uploadPhoto(template, field) {
        this.fileService.currentinfoElement = template;
        this.fileService.currentField = field;
        this.fileService.uploadDisplay = true;
    }
}
