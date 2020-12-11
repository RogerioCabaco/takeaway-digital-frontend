import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root",
})
export class DomainService {
    domainUrl = `${environment.apiUrl}/api/domain`

    private allTemplateCategoriesSubject = new BehaviorSubject<any>([]);
    allTemplateCategories = this.allTemplateCategoriesSubject.asObservable();

    private allLanguagesSubject = new BehaviorSubject<any>([]);
    allLanguages = this.allLanguagesSubject.asObservable();

    private allSocialMediaSubject = new BehaviorSubject<any>([]);
    allsocialMediaTypes = this.allSocialMediaSubject.asObservable();


    constructor(private http: HttpClient) {
        this.getAllLanguages();
        this.getAllTemplateCategories();
        this.getAllSocialMediaTypes();
    }

    getAllLanguages() {
        return this.http.get(`${this.domainUrl}/getAllLanguages`).subscribe(l => this.allLanguagesSubject.next(l));
    }
    getAllTemplateCategories() {
        return this.http.get(`${this.domainUrl}/getAllTemplateCategories`).subscribe(l => this.allTemplateCategoriesSubject.next(l));
    }
    getAllSocialMediaTypes() {
        return this.http.get(`${this.domainUrl}/getAllSocialMediaTypes`).subscribe(l => this.allSocialMediaSubject.next(l));
    }
}