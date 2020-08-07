export class Upload {
    $key: string;


    constructor(
        public title: string,
        public contentType: string,
        public time?: any,
        public readTime?: any,
        public content?: any,
    ) { }
}
