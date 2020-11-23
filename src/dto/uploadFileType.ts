import { FileListDto } from './fileListDto';

export interface UploadFileType {
    id?: number,
    type: string,
    file?: FileListDto,
    originalName: string,
    path: string,
    size: number
}
export interface UploadFiles {
    files: UploadFileType[],
    maxSize: number
}