import { Component, Input } from '@angular/core';

@Component({
    selector: 'data-title',
    template: `
        <h5 class="data-title">{{title}} <ng-content></ng-content></h5>
    `,
    styleUrls: ['./data-title.component.scss']
})

export class DataTitleComponent {
    @Input() title: string
}