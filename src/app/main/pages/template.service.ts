import { HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Template } from 'app/models/Template';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: "root",
})
export class TemplateService {
    templates: Template[] = [
        {
            id: 0, name: 'Marisqueira', url: `${environment.templates_url}/templates/marisqueira`,
            category: 'Restauração',
            description: 'Template destinado a restaurantes com produtos como marisco, etc etc.',
            photoUrl: 'assets/templates/marisqueira.jpg',
            isClientTemplate: false,
            redes: [],
            pages: [
                {
                    name: 'Home', link: '',
                    sections: [
                        {
                            name: 'Secção 1', linkId: '',
                            hasTitle: true,
                            hasSubTitle: true,
                            title: 'Section title 1',
                            sub_title: 'Section Subtitle 1',
                            info_groups: [
                                {
                                    texts: [
                                        { value: 'fsdgdsfg' },
                                        { value: 'roger' }
                                    ],
                                    photos: [
                                        { value: '' },
                                        { value: '' },
                                        { value: '' },
                                        { value: '' }
                                    ],
                                    icons: [
                                        { value: 'account_circle' }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'Secção 2', linkId: '#about',
                            hasTitle: true,
                            hasSubTitle: true,
                            title: 'Section title 2',
                            sub_title: 'Section Subtitle 2',
                            info_groups: [
                                {
                                    texts: [
                                        { value: 'fsdgdsfg' }
                                    ],
                                    icons: [
                                        { value: 'account_circle' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 1, name: 'Pizzaria Tradicional', url: 'https://themes.muffingroup.com/be/pizza4/',
            category: 'Restauração',
            description: 'Template destinado a restaurantes com produtos como pizzas, etc etc.',
            photoUrl: 'assets/templates/pizza1.jpg',
            isClientTemplate: false,
            redes: [],
            pages: [
                {
                    name: 'Home', link: '',
                    sections: [
                        {
                            name: 'Secção 1', linkId: '',
                            hasTitle: true,
                            hasSubTitle: true,
                            title: 'Section title 1',
                            sub_title: 'Section Subtitle 1',
                            info_groups: [
                                {
                                    texts: [
                                        { value: 'sdfsdfsdf' }
                                    ],
                                    icons: [
                                        { value: 'account_circle' }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'Secção 2', linkId: '#about',
                            hasTitle: true,
                            hasSubTitle: true,
                            title: 'Section title 2',
                            sub_title: 'Section Subtitle 2',
                            info_groups: [
                                {
                                    texts: [
                                        { value: 'asasasas' }
                                    ],
                                    icons: [
                                        { value: 'asdfasdfas' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
    activeTemplate: Template;

    constructor() { }

    createTemplates() {
        const template1 = new Template
    }

    // GET

}