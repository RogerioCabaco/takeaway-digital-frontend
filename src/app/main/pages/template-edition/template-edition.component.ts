import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { TemplateEditionForm, TemplateInfoElementForm, TemplatePageForm, TemplateSectionForm } from 'app/models/formGroups.ts/template-editionForm';
import { Page, Section, Template } from 'app/models/Template';
import { TemplateService } from '../template.service';

@Component({
    selector: 'template-edition',
    templateUrl: 'template-edition.component.html',
    styleUrls: ['template-edition.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class TemplateEditionComponent implements OnInit, OnDestroy {
    form = new FormGroup({});
    showPortal = false;
    template = this.templateService.activeTemplate;
    templateForm = new TemplateEditionForm(this.templateService.activeTemplate);
    externalUrl;

    activePage = (this.templateForm.get('pages') as FormArray).controls[0];
    activeSection = ((this.activePage as FormGroup).controls['sections'] as FormArray).controls[0];

    @ViewChild("fileInput", { static: false }) fileInput: ElementRef;
    files = [];

    get activeInfoGroups() {
        return ((this.activeSection as FormGroup).controls['info_groups'] as FormArray).controls;
    }

    get getSections() {
        return ((this.activePage as FormGroup).controls['sections'] as FormArray).controls;
    }

    constructor(
        private _fuseSidebarService: FuseSidebarService,
        public templateService: TemplateService,
        private router: Router,
        private _formBuilder: FormBuilder,
        private sanitizer: DomSanitizer) { }

    ngOnDestroy() {
        this.templateService.activeTemplate = null;
    }

    ngOnInit(): void {
        if (this.templateService.activeTemplate) {
            this.externalUrl = this.template.url + this.activePage.value.link + this.activeSection.value.linkId;
        }
        else {
            this.router.navigate(['./pages/templates']);
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    infoPhotos(infoGroup) {
        return infoGroup.get('photos').controls;
    }
    getTexts(infoGroup) {
        return infoGroup.get('texts').controls;
    }

    triggerUploadPhoto(id: string) {
        document.getElementById(id).click();
    }

    uploadPhoto(event, infoElement: TemplateInfoElementForm) {
        const file = event.target.files[0];
        const reader = new FileReader();

        infoElement.patchValue({ 'file': file });
        reader.addEventListener("load", function () {
            infoElement.patchValue({ 'value': this.result });
        });
        reader.readAsDataURL(file);
    }

    showPreview() {
        this.showPortal = true;
        console.log(this.externalUrl);
    }

    changeSections(section) {
        this.activeSection = section;
        this.externalUrl = this.template.url + this.activePage.value.link + this.activeSection.value.linkId;
        console.log(this.externalUrl);
    }

    savingTemplate() {
        console.log('saving template', this.templateForm.value);
    }

    publishTemplate() {
        console.log('publishing template', this.templateForm);
    }

    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}
