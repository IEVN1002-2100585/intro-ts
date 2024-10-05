import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent implements OnInit {
  Resistencias!:FormGroup;
  c1!:string;
  c2!:string;
  c3!:string;
  tolerancia!:string;
  valorBien!:number;
  valorMax!:number;
  valorMin!:number;

  constructor(){ }
ngOnInit(): void {
  this.Resistencias=new FormGroup({
    primercolor: new FormControl('', Validators.required),
    segundocolor: new FormControl('', Validators.required),
    tercercolor: new FormControl('', Validators.required),
    opcion: new FormControl('', Validators.required),
  })
}

Agregar(){
  const primercolor =this.Resistencias.get('primercolor')?.value;
  const segundocolor =this.Resistencias.get('segundocolor')?.value;
  const tercercolor =this.Resistencias.get('tercercolor')?.value;
  const Tolerancia =this.Resistencias.get('opcion')?.value;
  let t:number = 0;

  this.c1=primercolor;
  this.c2=segundocolor;
  this.c3=tercercolor;
  this.tolerancia=Tolerancia;

  if(this.tolerancia == "Oro"){
    t=0.05;
  } else{
    t=0.1;
  }

  var c1 = this.Verificar(primercolor);
  var c2 = this.Verificar(segundocolor);
  var c3 = this.Multiplicador(tercercolor);

  let valor:string =c1+''+c2;
  this.valorBien = parseInt(valor) * c3;

  this.valorMax = this.valorBien + (this.valorBien * t)
  this.valorMin = this.valorBien - (this.valorBien * t)

}

Verificar(x:string):number{
  var v:number = 0;

  switch (x){
    case 'Negro':
      v=0;
      break;
    case 'Cafe':
      v=1;
      break;
    case 'Rojo':
      v=2;
      break;
    case 'Naranja':
      v=3;
      break;
    case 'Amarillo':
      v=4;
      break;
    case 'Verde':
      v=5;
      break;
    case 'Azul':
      v=6;
      break;
    case 'Violeta':
      v=7;
      break;
    case 'Gris':
      v=8;
      break;
    case 'Blanco':
      v=9;
      break;
  }

  return v;
}
Multiplicador(x:string):number{
  var v:number = 0;

  switch (x){
    case 'Negro':
      v=1;
      break;
    case 'Cafe':
      v=10;
      break;
    case 'Rojo':
      v=100;
      break;
    case 'Naranja':
      v=1000;
      break;
    case 'Amarillo':
      v=10000;
      break;
    case 'Verde':
      v=100000;
      break;
    case 'Azul':
      v=1000000;
      break;
    case 'Violeta':
      v=10000000;
      break;
    case 'Gris':
      v=100000000;
      break;
    case 'Blanco':
      v=1000000000;
      break;
  }

  return v;
}

}