import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: "root",
})
export class UploadHttpService {
    apiUrl = ''

    constructor(private http: HttpClient) { }

    // GET
    upload(formData) {
        return this.http.post(`${this.apiUrl}/file`, formData);
    }
}


