import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoElements, InfoGroup, Page, Section, Template, TextTranslation } from '../Template';

export class TemplateEditionForm extends FormGroup {
    constructor(template: Template = null) {
        super({});
        this.addControl('id', new FormControl(template ? template.id : null));
        this.addControl('languages', new FormControl(template ? template.languages : []));
        this.addControl('networks', new FormControl(template ? template.networks : []));
        this.addControl('name', new FormControl(template ? template.name : null));
        this.addControl('category', new FormControl(template ? template.category : null));
        this.addControl('url', new FormControl(template ? template.url : null));
        this.addControl('photoUrl', new FormControl(template ? template.photoUrl : null));
        this.addControl('description', new FormControl(template ? template.description : null));
        this.addControl('pages', new FormArray([], Validators.required));

        if (template && template.pages) {
            template.pages.forEach(page => {
                this.addPage(page);
            });
            console.log('TemplateForm', this);
        }
        console.log('TemplateFormCreated', this);
    }
    addPage(page: Page = null) {
        if (!page) {
            const newPage = new TemplatePageForm();
            newPage.addSection();
            (this.controls['pages'] as FormArray).push(newPage);
        }
        else {
            (this.controls['pages'] as FormArray).push(new TemplatePageForm(page));
        }
    }
}
export class TemplatePageForm extends FormGroup {
    constructor(page: Page = null) {
        super({});
        this.addControl('id', new FormControl(page ? page.id : null));
        this.addControl('name', new FormControl(page ? page.name : null));
        this.addControl('code', new FormControl(page ? page.code : null));
        this.addControl('sections', new FormArray([], Validators.required));
        if (page) {
            page.sections.forEach(section => {
                this.addSection(section);
            });
        }
    }
    addSection(section: Section = null) {
        if (!section) {
            const newSection = new TemplateSectionForm();
            newSection.addInfoGroup();
            (this.controls['sections'] as FormArray).push(newSection);
        }
        else {
            (this.controls['sections'] as FormArray).push(new TemplateSectionForm(section));
        }
    }
}
export class TemplateSectionForm extends FormGroup {
    constructor(section: Section = null) {
        super({});
        this.addControl('saved', new FormControl(true));
        this.addControl('id', new FormControl(section ? section.id : null));
        this.addControl('name', new FormControl(section ? section.name : null));
        this.addControl('infoGroupsName', new FormControl(section ? section.infoGroupsName : null));
        this.addControl('code', new FormControl(section ? section.code : null));
        this.addControl('hasTitle', new FormControl(false));
        this.addControl('hasSubTitle', new FormControl(false));
        this.addControl('title', new FormControl(section ? section.title : null));
        this.addControl('subTitle', new FormControl(section ? section.subTitle : null));
        this.addControl('info_Groups', new FormArray([], Validators.required));

        if (section) {
            section.info_Groups.forEach(info_group => {
                this.addInfoGroup(info_group);
            });

            if (section.titles.length > 0) {
                section.titles.forEach(text => {
                    if (text.isTitle) {
                        this.controls['title'] = new TemplateInfoElementForm(text);
                    }
                    else {
                        this.controls['subTitle'] = new TemplateInfoElementForm(text);
                    }
                });
            }
        }
        this.valueChanges.subscribe(() => {
            this.patchValue({ 'saved': false });
        });
    }
    addInfoGroup(infoGroup: InfoGroup = null) {
        (this.controls['info_Groups'] as FormArray).push(new TemplateInfoGroupForm(infoGroup ? infoGroup : null));
    }
}
export class TemplateInfoGroupForm extends FormGroup {
    constructor(infoGroup: InfoGroup = null) {
        super({});
        this.addControl('id', new FormControl(infoGroup ? infoGroup.id : null));
        this.addControl('clientCanAdd', new FormControl(infoGroup ? infoGroup.clientCanAdd : false));
        this.addControl('name', new FormControl(infoGroup ? infoGroup.name : ''));
        this.addControl('textsNumber', new FormControl(infoGroup ? infoGroup.texts.length : 0));
        this.addControl('buttonsNumber', new FormControl(infoGroup ? infoGroup.buttons.length : 0));
        this.addControl('photosNumber', new FormControl(infoGroup ? infoGroup.photos.length : 0));
        this.addControl('videosNumber', new FormControl(infoGroup ? infoGroup.videos.length : 0));
        this.addControl('filesNumber', new FormControl(infoGroup ? infoGroup.files.length : 0));
        this.addControl('texts', new FormArray([]));
        this.addControl('buttons', new FormArray([]));
        this.addControl('photos', new FormArray([]));
        this.addControl('videos', new FormArray([]));
        this.addControl('files', new FormArray([]));

        if (infoGroup && infoGroup.buttons) {
            infoGroup.buttons.forEach(button => {
                (this.controls['buttons'] as FormArray).push(new TemplateInfoElementForm(button));
            });
        }
        if (infoGroup && infoGroup.texts) {
            infoGroup.texts.forEach(text => {
                (this.controls['texts'] as FormArray).push(new TemplateInfoElementForm(text));
            });
        }
        if (infoGroup && infoGroup.photos) {
            infoGroup.photos.forEach(photo => {
                (this.controls['photos'] as FormArray).push(new TemplateInfoElementForm(photo));
            });
        }
        if (infoGroup && infoGroup.videos) {
            infoGroup.videos.forEach(video => {
                (this.controls['videos'] as FormArray).push(new TemplateInfoElementForm(video));
            });
        }
        if (infoGroup && infoGroup.files) {
            infoGroup.files.forEach(file => {
                (this.controls['files'] as FormArray).push(new TemplateInfoElementForm(file));
            });
        }
    }
    addText() {
        (this.controls['texts'] as FormArray).push(new TemplateInfoElementForm());
    }
    removeText(index: number) {
        (this.controls['texts'] as FormArray).removeAt(index);
    }
}
export class TemplateInfoElementForm extends FormGroup {
    constructor(infoElement: InfoElements = null) {
        super({});
        this.addControl('id', new FormControl(infoElement ? infoElement.id : null));
        this.addControl('value', new FormControl(infoElement ? infoElement.value : ''));
        this.addControl('changed', new FormControl(false));
        this.addControl('clientCanAdd', new FormControl(infoElement ? infoElement.clientCanAdd : false));
        this.addControl('isTitle', new FormControl(infoElement ? infoElement.isTitle : false));
        this.addControl('isSubTitle', new FormControl(infoElement ? infoElement.isSubTitle : false));
        this.addControl('translations', new FormArray([]));

        if (infoElement && infoElement.translations) {
            infoElement.translations.forEach(translation => {
                (this.controls['translations'] as FormArray).push(new TemplateTextTranslationForm(translation));
            })
        }

        this.valueChanges.subscribe(() => {
            this.patchValue({ 'changed': true });
        });
    }
}
export class TemplateTextTranslationForm extends FormGroup {
    constructor(textTranslation: TextTranslation = null) {
        super({});
        this.addControl('id', new FormControl(textTranslation ? textTranslation.id : null));
        this.addControl('value', new FormControl(textTranslation ? textTranslation.value : ''));
        this.addControl('language', new FormControl(textTranslation ? textTranslation.language : ''));
        this.addControl('changed', new FormControl(false));

        this.valueChanges.subscribe(() => {
            this.patchValue({ 'changed': true });
        });
    }
}