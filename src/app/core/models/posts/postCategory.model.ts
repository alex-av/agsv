import { PostType } from "src/app/components/types/type.postType";

export class ModelPostCategory{

    Id: number | null | undefined = 0;
    Name: PostType = '';
    
    constructor(){

    }

    setCategory(){
    
        return ["tagsArray"];
      }
}