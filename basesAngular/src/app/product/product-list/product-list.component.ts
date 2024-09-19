import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year": 2023,
      "Marca": "KIA",
      "color":  "Gris",
      "ImagenUrl": ""
    },

    {
      "productoId":2,
      "Modelo":"3",
      "Descripcion":"4 puertas",
      "Precio": 15000,
      "Year": 2022,
      "Marca": "MAZDA",
      "color":  "Rojo",
      "ImagenUrl": ""
    },

    {
      "productoId":3,
      "Modelo":"Aventador",
      "Descripcion":"2 puertas",
      "Precio": 4000000,
      "Year": 2022,
      "Marca": "LAMBORGHINI",
      "color":  "Blanco",
      "ImagenUrl": ""
    }
  ]

}
