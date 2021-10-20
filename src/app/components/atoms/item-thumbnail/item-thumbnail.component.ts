import { Component, Input, OnInit } from '@angular/core';
import { PostMediaTypes } from '../../types/type.mediaType';

interface postItemIcons {
  none:string,
  video:string,
  image:string
  audio:string,

}

@Component({
  selector: 'app-item-thumbnail',
  templateUrl: './item-thumbnail.component.html',
  styleUrls: ['./item-thumbnail.component.css']
})
export class ItemThumbnailComponent {
  @Input()
  mediaType:PostMediaTypes = 'none' ;

  @Input()
  src:string = '';

  
  options:postItemIcons={
    none:'',
    video:'camera',
    image:'image',
    audio:'headphones'
  }





}
