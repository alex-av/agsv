export class ModelTag{

    id: number | null | undefined;
    name: string = ''
    
    constructor(){

    }

    tagsToArray():(string | null)[]{
        return ["tagsArray"];
    }
}

export class ModelTagName {
    en!: string| null; 
}