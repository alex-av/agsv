export class ModelResponse{

    
    data!: [any];
    status!: boolean;
    links!: ModelLinksPager;
    meta!: ModelMetaPager;

    constructor(){

    }
}

export class ModelLinksPager{
    first!: string;
    last!: string;
    next!: string;
    prev!: string;
}

export class ModelMetaPager{
    current_page!: number;
    datetimee!: string;
    from!: number;
    ip!: string;
    last_page!: number;
    per_page!: number;
    to!: number;
    total!: [number,number];
    url!: StringConstructor;
    status!: boolean;
}   