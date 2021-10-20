import { ModelPost } from "../models/posts/post.model";
import { ModelTag } from "../models/tag.model";

export class FecadesPost{

    static tagsToArray(tags:[ModelTag]):(string | null)[]{
    
        // console.log(tags);
        if(tags){
          // tagsArray = tags.map( (tag) => tag.TagName);
        }
        
        return ["tagsArray"];
      }
    
      calcRaiting(post:ModelPost): number {
        // console.log(post.Interactions, post.Like, post.ResponsesLenght, post.Comments.length)
        return post.Like + post.ResponsesLenght;
        
      }
    
      setCatgory(type:string): string{
        
        switch(type){
          case 'Yo pregunto':
            return 'pregunta'
            
          case 'Yo comparto':
            return 'compartido'
            
          default:
            return ''
        } 
      }
}