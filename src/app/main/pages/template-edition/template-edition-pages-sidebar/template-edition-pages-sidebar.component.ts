import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Page } from 'app/models/Template';

@Component({
    selector: 'template-edition-pages-sidebar',
    templateUrl: 'template-edition-pages-sidebar.component.html',
    styleUrls: ['template-edition-pages-sidebar.component.scss']
})
export class TemplateEditionPagesSidebarComponent {
    @Input() activePage;
    @Input() pages;

    @Output() activePageChanged = new EventEmitter();

    constructor() { }

    changeActivePage(page) {
        this.activePageChanged.emit(page);
    }
}