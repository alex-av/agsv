import { ModelTag } from "../tag.model";
import { ModelProfile } from "../user/profile.model";
import { ModelComments } from "./comments.model";
import { ModelPostCategory } from "./postCategory.model";

export class ModelPost{

    
    Id: number = 0;
    Category: ModelPostCategory = new ModelPostCategory();
    CreatedAt: string = '';
    Description: string = '';
    Interactions: number = 0;
    Like: number = 0;
    ParentPost: number | null = 0;
    Priority: number = 0;
    Profile: ModelProfile =  new ModelProfile();
    StatusCod!: number | null;
    StatusText!: string | null;
    Title!: string;
    ResponsesLenght!: number;
    PostResponse!: ModelPost;
    Comments!: [ModelComments];
    Tags!: [ModelTag];          
    tagsArray!: (string | null)[];

    constructor(){
        // this.Tags = this.getTag();
        // console.log(this.tagsArray);
    }

    
}