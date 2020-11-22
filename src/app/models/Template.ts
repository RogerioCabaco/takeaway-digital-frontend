export class Template {
    id: number;
    name: string;
    category: string;
    description: string;
    url: string;
    photoUrl: string;
    pages: Page[];
    redes: any[];
    isClientTemplate: boolean;

    constructor() {
    }
}
export interface Page {
    id?: number,
    name: string,
    link: string,
    code?: string,
    sections: Section[]
}
export interface Section {
    id?: number,
    name: string,
    linkId: string,
    hasTitle: boolean,
    hasSubTitle: boolean,
    title: string,
    sub_title: string,
    info_groups: InfoGroup[]
}
export interface InfoGroup {
    id?: number,
    icons?: InfoElements[],
    buttons?: InfoElements[],
    texts?: InfoElements[],
    photos?: InfoElements[],
    videos?: InfoElements[],
    files?: InfoElements[]
}
export interface InfoElements {
    id?: number,
    // name: string,
    text?: string,
    value: string,
    restoreOriginalValue?: string
}