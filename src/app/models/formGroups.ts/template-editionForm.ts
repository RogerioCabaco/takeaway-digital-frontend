import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoElements, InfoGroup, Page, Section, Template } from '../Template';

export class TemplateEditionForm extends FormGroup {
    constructor(template: Template) {
        super({});
        this.addControl('pages', new FormArray([], Validators.required));

        template.pages.forEach(page => {
            (this.controls['pages'] as FormArray).push(new TemplatePageForm(page));
        });
        console.log('TemplateForm', this);
    }
}
export class TemplatePageForm extends FormGroup {
    constructor(page: Page) {
        super({});
        this.addControl('id', new FormControl(page.id));
        this.addControl('name', new FormControl(page.name));
        this.addControl('link', new FormControl(page.link));
        this.addControl('code', new FormControl(page.code));
        this.addControl('sections', new FormArray([], Validators.required));

        page.sections.forEach(section => {
            (this.controls['sections'] as FormArray).push(new TemplateSectionForm(section));
        });
    }
}
export class TemplateSectionForm extends FormGroup {
    constructor(section: Section) {
        super({});
        this.addControl('id', new FormControl(section.id));
        this.addControl('name', new FormControl(section.name));
        this.addControl('linkId', new FormControl(section.linkId));
        this.addControl('hasTitle', new FormControl(section.hasTitle));
        this.addControl('hasSubTitle', new FormControl(section.hasSubTitle));
        this.addControl('title', new FormControl(section.title));
        this.addControl('sub_title', new FormControl(section.sub_title));
        this.addControl('info_groups', new FormArray([], Validators.required));

        section.info_groups.forEach(info_group => {
            (this.controls['info_groups'] as FormArray).push(new TemplateInfoGroupForm(info_group));
        });
    }
}
export class TemplateInfoGroupForm extends FormGroup {
    constructor(infoGroup: InfoGroup) {
        super({});
        this.addControl('id', new FormControl(infoGroup.id));
        this.addControl('icons', new FormArray([]));
        this.addControl('texts', new FormArray([]));
        this.addControl('buttons', new FormArray([]));
        this.addControl('photos', new FormArray([]));
        this.addControl('videos', new FormArray([]));
        this.addControl('files', new FormArray([]));

        if (infoGroup.buttons) {
            infoGroup.buttons.forEach(button => {
                (this.controls['buttons'] as FormArray).push(new TemplateInfoElementForm(button));
            });
        }
        if (infoGroup.texts) {
            infoGroup.texts.forEach(text => {
                (this.controls['texts'] as FormArray).push(new TemplateInfoElementForm(text));
            });
        }
        if (infoGroup.photos) {
            infoGroup.photos.forEach(photo => {
                (this.controls['photos'] as FormArray).push(new TemplateInfoElementForm(photo));
            });
        }
        if (infoGroup.videos) {
            infoGroup.videos.forEach(video => {
                (this.controls['videos'] as FormArray).push(new TemplateInfoElementForm(video));
            });
        }
        if (infoGroup.files) {
            infoGroup.files.forEach(file => {
                (this.controls['files'] as FormArray).push(new TemplateInfoElementForm(file));
            });
        }
    }
}
export class TemplateInfoElementForm extends FormGroup {
    constructor(infoElement: InfoElements) {
        super({});
        this.addControl('id', new FormControl(infoElement.id));
        this.addControl('text', new FormControl(infoElement.text));
        this.addControl('value', new FormControl(infoElement.value));
        this.addControl('file', new FormControl());
    }
}