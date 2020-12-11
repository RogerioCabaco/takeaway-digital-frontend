import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileListDto } from 'dto/fileListDto';
import { UploadFiles, UploadFileType } from 'dto/uploadFileType';
import { environment } from 'environments/environment';
import { FileService } from './file.service';

@Component({
    selector: 'upload-files',
    templateUrl: 'upload-files.component.html',
    styleUrls: ['upload-files.component.scss']
})
export class UploadFilesComponent {
    apiUrl = environment.apiUrl;

    constructor(
        public fileService: FileService,
        private sanitizer: DomSanitizer) {
        this.getAllFiles();
    }

    closeDialog(file: FileListDto) {
        if (this.fileService.currentField) {
            this.fileService.currentinfoElement.patchValue({ 'photoUrl': file.path });
        }
        else {
            this.fileService.currentinfoElement.patchValue({ 'value': file.path });
        }
        console.log(this.fileService.currentinfoElement.value);
        this.fileService.currentField = null;
        this.fileService.currentinfoElement = null;
        this.fileService.uploadDisplay = false;
    }

    openFileAtNewWindow(url) {
        window.open(url);
    }

    getSanitizedUrl(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    getTypeFiles(type: string) {
        return this.fileService.filesAvailable.filter(f => f.type === type);
    }

    getAllFiles() {
        this.fileService.isLoadingFiles = true;
        this.fileService.getAll().subscribe((response: UploadFiles) => {
            //this.fileService.resetFiles();
            this.fileService.currentSize = 0;
            response.files.forEach(r => {
                this.updateFileValues(r);
                this.fileService.currentSize += r.size;
            });
            this.fileService.filesAvailable = response.files;
            this.fileService.totalMaxSize = response.maxSize;
            this.fileService.isLoadingFiles = false;
        },
            (error) => {
                console.log('error', error);
                this.fileService.isLoadingFiles = false;
            });
    }

    uploadFile($event, fileType: string) {
        let input = new FormData();
        input.append('File', $event.target.files[0]);

        this.fileService.isLoadingFiles = true;
        document.getElementById("photoInput").setAttribute('value', '');
        document.getElementById("videoInput").setAttribute('value', '');
        document.getElementById("fileInput").setAttribute('value', '');
        this.fileService.uploadFile(input, fileType).subscribe((response: UploadFileType) => {
            this.updateFileValues(response);
            this.fileService.filesAvailable.push(response);
            this.fileService.isLoadingFiles = false;
        },
            (error) => {
                console.log('error', error);
                this.fileService.isLoadingFiles = false;
            });
    }

    updateFileValues(file: UploadFileType) {
        file.size = file.size / 1024 / 1024;
        file.path = this.apiUrl + '/' + file.path;
    }

    deleteFile(id: number) {
        this.fileService.isLoadingFiles = true;
        this.fileService.removeFile(id).subscribe(r => {
            alert('File was sucessfully removed!');
            this.getAllFiles();
        },
            (error) => {
                console.log('error', error);
                this.fileService.isLoadingFiles = false;
            });
    }
}
