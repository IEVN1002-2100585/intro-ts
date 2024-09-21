import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*bgIf=true,o false

  imagenWidth:number=60;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=''

  muestImg():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year": "Febrero 3 2024",
      "Marca": "KIA",
      "color":  "Azul",
      "ImagenUrl": "https://img.remediosdigitales.com/abf092/kia-rio-2021-1600-08/1366_2000.jpeg"
    },

    {
      "productoId":2,
      "Modelo":"3",
      "Descripcion":"4 puertas",
      "Precio": 15000,
      "Year": "Octubre 6 2024",
      "Marca": "MAZDA",
      "color":  "Gris",
      "ImagenUrl": "https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/9e89d77b/mz1.webp"
    },

    {
      "productoId":3,
      "Modelo":"Aventador",
      "Descripcion":"2 puertas",
      "Precio": 4000000,
      "Year": "julio 2 2011",
      "Marca": "LAMBORGHINI",
      "color":  "Amarillo",
      "ImagenUrl": "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/s/ar_aven_s.png"
    }
  ]

}
