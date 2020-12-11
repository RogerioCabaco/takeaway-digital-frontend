import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FileService } from 'app/main/apps/upload-files/file.service';
import { TemplateEditionForm, TemplateInfoElementForm, TemplatePageForm, TemplateSectionForm } from 'app/models/formGroups.ts/template-editionForm';
import { Language, Page, Section, Template } from 'app/models/Template';
import { DomainService } from 'app/services/domain.service';
import { TemplateService } from 'app/services/template.service';
import { environment } from 'environments/environment';
@Component({
    selector: 'template-edition',
    templateUrl: 'template-edition.component.html',
    styleUrls: ['template-edition.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class TemplateEditionComponent implements OnInit, OnDestroy {
    //showPortal = false;
    template: Template;
    templateForm;

    apiUrl = environment.apiUrl;

    activeLanguage: Language;
    activePage;
    activeSection;

    navigationEdition = true;

    get activeInfoGroups() {
        return this.activeSection ? ((this.activeSection as FormGroup).controls['info_Groups'] as FormArray).controls : [];
    }

    get getSections() {
        return this.activePage ? ((this.activePage as FormGroup).controls['sections'] as FormArray).controls : [];
    }

    constructor(
        private _fuseSidebarService: FuseSidebarService,
        public templateService: TemplateService,
        private router: Router,
        private route: ActivatedRoute,
        private fileService: FileService) { }

    ngOnDestroy() {
        this.templateService.canShowTemplateEdition = false;
    }

    ngOnInit(): void {
        if (this.templateService.canShowTemplateEdition) {
            this.route.params.subscribe((params) => {
                this.loadTemplate(+params["id"]);
            });
        }
        else {
            this.router.navigate(['/pages/templates']);
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    findLanguageIndex(id: number) {
        const x = this.template.languages.findIndex(l => l.id === id);
        console.log(x);
        return x;
    }
    loadTemplate(id: number) {
        this.templateService.getById(id).subscribe(
            (data: Template) => {
                this.template = data;
                this.templateForm = new TemplateEditionForm(data);
                //this.externalUrl = this.template.url + this.activePage.value.link + this.activeSection.value.linkId;
                this.activePage = (this.templateForm.get('pages') as FormArray).controls[0];
                this.activeSection = ((this.activePage as FormGroup).controls['sections'] as FormArray).controls[0];
                this.activeLanguage = data.languages[0];
                console.log(data);
                console.log('template By Id', data)
            },
            (error) => {
                console.log(error);
            },
        )
    }
    infoElementControls(infoGroup, type: string) {
        return infoGroup.get(type).controls;
    }

    triggerUploadPhoto(id: string) {
        document.getElementById(id).click();
    }

    uploadPhoto(infoElement: TemplateInfoElementForm) {
        this.fileService.currentinfoElement = infoElement;
        this.fileService.uploadDisplay = true;
    }

    showPreview() {
        //this.showPortal = true;
        //console.log(this.externalUrl);
    }

    changeSections(section) {
        this.navigationEdition = false;
        this.activeSection = section;
        //this.externalUrl = this.template.url + this.activePage.value.link + this.activeSection.value.linkId;
        //console.log(this.externalUrl);
    }

    updateSection() {
        console.log('updating section', this.templateForm.value);
        if (this.activeSection.valid) {
            this.templateService.updateSection(this.activeSection.value).subscribe(
                (data: Section) => {
                    console.log('section updated', data);
                    this.activeSection = new TemplateSectionForm(data);
                },
                (error) => console.log(error)
            );
        }
    }

    publishTemplate() {
        console.log('publishing template', this.templateForm);
    }

    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}
