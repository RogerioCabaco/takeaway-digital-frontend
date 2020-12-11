import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Template } from 'app/models/Template';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: "root",
})
export class TemplateService {
    serviceUrl = `${environment.apiUrl}/api/template`;

    //activeTemplate: Template;
    templates;
    canShowTemplateEdition = false;

    constructor(private http: HttpClient) { console.log('inicializei serviço'); }

    // GET
    getAll() {
        return this.http.get(`${this.serviceUrl}/getAll`);
    }
    getById(id: number) {
        return this.http.get(`${this.serviceUrl}/get/${id}`);
    }

    // POST
    insert(templateValue) {
        console.log(templateValue);
        return this.http.post(`${this.serviceUrl}/insert`, templateValue);
    }

    //PUT
    updateSection(section) {
        return this.http.put(`${this.serviceUrl}/update/section`, section);
    }

    // templates: Template[] = [
    //     {
    //         id: 0, name: 'Marisqueira', url: `${environment.templates_url}/templates/marisqueira`,
    //         category: 'Restauração',
    //         description: 'Template destinado a restaurantes com produtos como marisco, etc etc.',
    //         photoUrl: 'assets/templates/marisqueira.jpg',
    //         isClientTemplate: false,
    //         isPublished: false,
    //         redes: [],
    //         pages: [
    //             {
    //                 name: 'Home', link: '',
    //                 sections: [
    //                     {
    //                         name: 'Secção 1', linkId: '',
    //                         hasTitle: true,
    //                         hasSubTitle: true,
    //                         title: 'Section title 1',
    //                         sub_title: 'Section Subtitle 1',
    //                         info_groups: [
    //                             {
    //                                 texts: [
    //                                     { value: 'fsdgdsfg' },
    //                                     { value: 'roger' }
    //                                 ],
    //                                 photos: [
    //                                     { value: '' },
    //                                     { value: '' },
    //                                     { value: '' },
    //                                     { value: '' }
    //                                 ],
    //                                 videos: [
    //                                     { value: '' },
    //                                     { value: '' }
    //                                 ],
    //                                 files: [
    //                                     { value: '' },
    //                                     { value: '' }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         name: 'Secção 2', linkId: '#about',
    //                         hasTitle: true,
    //                         hasSubTitle: true,
    //                         title: 'Section title 2',
    //                         sub_title: 'Section Subtitle 2',
    //                         info_groups: [
    //                             {
    //                                 texts: [
    //                                     { value: 'fsdgdsfg' }
    //                                 ]
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         id: 1, name: 'Pizzaria Tradicional', url: 'https://themes.muffingroup.com/be/pizza4/',
    //         category: 'Restauração',
    //         description: 'Template destinado a restaurantes com produtos como pizzas, etc etc.',
    //         photoUrl: 'assets/templates/pizza1.jpg',
    //         isClientTemplate: false,
    //         isPublished: false,
    //         redes: [],
    //         pages: [
    //             {
    //                 name: 'Home', link: '',
    //                 sections: [
    //                     {
    //                         name: 'Secção 1', linkId: '',
    //                         hasTitle: true,
    //                         hasSubTitle: true,
    //                         title: 'Section title 1',
    //                         sub_title: 'Section Subtitle 1',
    //                         info_groups: [
    //                             {
    //                                 texts: [
    //                                     { value: 'sdfsdfsdf' }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         name: 'Secção 2', linkId: '#about',
    //                         hasTitle: true,
    //                         hasSubTitle: true,
    //                         title: 'Section title 2',
    //                         sub_title: 'Section Subtitle 2',
    //                         info_groups: [
    //                             {
    //                                 texts: [
    //                                     { value: 'asasasas' }
    //                                 ]
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ]
}