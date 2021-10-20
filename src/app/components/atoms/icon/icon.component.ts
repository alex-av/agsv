import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  /**
   * Genera íconos del pack de íconos creado para el proyecto
  */
  @Input() icon:string = 'user';
  
/**
   * Temas, hasta ahora configurado el light por defecto
  */
  @Input() theme:string = 'light';
  
  /**
   * Color base del ícono, recurrir a la paleta de colores para el uso en el app
   */
  @Input() color:string = '#ccc';

  /**
   * Opcional: Me permite definir el tamaño del ícono.
   * Los valores se deben digitar con la unidad de medida: px, em, rem, pt
   */
  @Input() size?:string = '';

  /**
   * Rotación del ícono, los valores deben insertarse con unidad de medid 'deg'
   */
  @Input() rotate:string = '';

  /**
   * Opcional: Indicador de notificación
   * 
  */
  @Input() notification:boolean = false

}

