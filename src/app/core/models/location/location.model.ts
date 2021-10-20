import { ModelLocationItem } from "./locationItem.model";

export class ModelLocation{

    Id: number | null | undefined;
    Address: string = '';
    Cellphone: string = '';
    City: ModelLocationItem = new ModelLocationItem;
    State: ModelLocationItem = new ModelLocationItem;
    Country: ModelLocationItem = new ModelLocationItem;
    
    constructor(){

    }
}
