export class Template {
    id: number;
    languages: Language[];
    name: string;
    category: string;
    description: string;
    url: string;
    photoUrl: string;
    pages: Page[];
    networks: Network[];
    isPublished: boolean;
    isClientTemplate: boolean;

    constructor() {
    }
}
export interface Page {
    id?: number,
    name: string,
    link: string,
    code: string,
    sections: Section[]
}
export interface Section {
    id?: number,
    name: string,
    infoGroupsName: string,
    code: string,
    linkId: string,
    hasTitle: boolean,
    hasSubTitle: boolean,
    title: string,
    titles: InfoElements[],
    subTitle: string,
    info_Groups: InfoGroup[]
}
export interface InfoGroup {
    id?: number,
    name: string,
    clientCanAdd: boolean,
    buttons?: InfoElements[],
    texts?: InfoElements[],
    photos?: InfoElements[],
    videos?: InfoElements[],
    files?: InfoElements[]
}
export interface InfoElements {
    id?: number,
    value?: string,
    restoreOriginalValue?: string,
    clientCanAdd: boolean,
    isTitle: boolean,
    isSubTitle: boolean,
    translations: TextTranslation[]
}
export interface Language {
    id: number,
    language: string,
    icone: string,
    removed: boolean
}
export interface TextTranslation {
    id: number,
    language: string,
    value: string
}
export interface Network {
    id: number,
    name: string,
    icone: string,
    value?: string
}