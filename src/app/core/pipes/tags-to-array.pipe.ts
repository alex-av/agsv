import { Pipe, PipeTransform } from '@angular/core';
import { ModelTag } from '../models/tag.model';

@Pipe({
  name: 'tagsToArray'
})
export class TagsToArrayPipe implements PipeTransform {

  transform(tags: [ModelTag],args?: any): (string | null)[] {
    
    return tags.map( (tag) => tag.name.en);
    
  }

}
