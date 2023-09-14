import { CONTENT_TYPE } from './enum';

export interface ClassTemplate {
    title: string;
    subtitle: string;
    weeks: Week[];
}

export interface Week {
    weeknumber: string;
    title: string;
    content: Content[];
    documents: Document[];
    videos: Document[];
    homework: Document[];
    presentation?: string;
    exercices?: string;
}

export class Document {
    constructor(
        public data: string, 
        public title: string, 
        public doctype: string
    ) { }
}

export class Content {
    constructor(
        public text: string, 
        public contype: string = CONTENT_TYPE.TEXT
    ) { }
}
