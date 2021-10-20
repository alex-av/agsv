import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-post-multi-image',
  templateUrl: './post-multi-image.component.html',
  styleUrls: ['./post-multi-image.component.css']
})
export class PostMultiImageComponent implements OnInit {

  images:any[]|Gallery[]=[];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  constructor() { }

  ngOnInit(): void {

    this.images = [{
      "previewImageSrc": "https://primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria1.jpg",
      "thumbnailImageSrc": "https://primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria1.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },

  {
    "previewImageSrc": "https://primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria2.jpg",
    "thumbnailImageSrc": "https://primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria2.jpg",
    "alt": "Description for Image 1",
    "title": "Title 1"
  }]

  

}

}

// TODO: Crear evento onslide para cambiar las imágenes
