import { HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UploadHttpService } from './uploadHttp.service';


@Injectable({
    providedIn: "root",
})
export class UploadService {
    activeRowsNumber: number = 0;

    constructor(private uploadHttpService: UploadHttpService) { }

    // GET
    callUploadService(file) {
        const formData = new FormData();
        formData.append('file', file.data);
        file.inProgress = true;
        this.uploadHttpService.upload(formData).pipe(
            map(event => {
                switch (event.type) {
                    case HttpEventType.UploadProgress:
                        file.progress = Math.round(event.loaded * 100 / event.total);
                        break;
                    case HttpEventType.Response:
                        return event;
                }
            }).subscribe((event: any) => {
                if (typeof (event) === 'object') {
                    console.log(event.body);
                }
            });
    }
}


