import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { UploadFileType } from 'dto/uploadFileType';
import { TemplateInfoElementForm } from 'app/models/formGroups.ts/template-editionForm';

@Injectable({
    providedIn: "root"
})
export class FileService {
    serviceUrl = `${environment.apiUrl}/api/file`;
    uploadDisplay = false;
    isLoadingFiles = false;
    currentField;
    filesAvailable: UploadFileType[] = [];
    currentSize = 0;
    totalMaxSize = 0;
    currentinfoElement: TemplateInfoElementForm;

    constructor(private http: HttpClient) { }

    updateCurrentSize() {
        this.currentSize = 0;
        this.filesAvailable.forEach(element => {
            this.currentSize += element.size;
        });
    }

    // showUpload(uploadFileType: UploadFileType) {
    //     this.uploadDisplay = true;
    // }

    // hideUpload() {
    //     this.uploadDisplay = false;
    // }

    // Http calls

    uploadFile(fileUploadDto, fileType: string) {
        return this.http.post(`${this.serviceUrl}/upload?type=${fileType}`, fileUploadDto);
    }

    getAll() {
        return this.http.get(`${this.serviceUrl}/getAll`);
    }

    removeFile(id: number) {
        return this.http.delete(`${this.serviceUrl}/removeFile/${id}`);
    }

}
