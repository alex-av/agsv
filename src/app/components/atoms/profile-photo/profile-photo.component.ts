import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../../types/type.categories';
import { ProfilePhotoSizes } from '../../types/type.styleTypes';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent implements OnInit {

  /**
   * URL de la foto, cuando esta no aparece el componente no se renderiza
   */
  @Input() src:string = ''
  /**
   * Categorías del perfil que definen el color del círculo
  */
  @Input() category:string | '' | 'extensionista' | 'productor' | 'investigador'| 'productora' | 'investigadora' = ''
  /**
   * Tamaño de la foto, hasta ahora por defecto está a 38px x 38px y se puede configurar a x2
   */
  @Input() size:ProfilePhotoSizes=''
  constructor() { }

  ngOnInit(): void {
  }

}
