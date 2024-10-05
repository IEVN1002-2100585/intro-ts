import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent implements OnInit{
  Cine!:FormGroup;
  Total!:number;
  mensaje!:string;

constructor(){ }
ngOnInit(): void {
  this.Cine=new FormGroup({
    cliente: new FormControl('', Validators.required),
    cuantosB: new FormControl('', Validators.required),
    opcion: new FormControl('', Validators.required),
    boletos: new FormControl('', Validators.required)
  })
}

Calcular(){
  const cliente = this.Cine.get('cliente')?.value;
  const personas =this.Cine.get('cuantosB')?.value;
  const tarjeta =this.Cine.get('opcion')?.value;
  const boletos =this.Cine.get('boletos')?.value;

  this.Total = boletos * 12;

  if (personas * 7 >= (boletos*personas)) {
    if (boletos > 5) {
      this.Total = this.Total - (this.Total * 0.15);
    } else 
    if (boletos == 3 || boletos == 4 || boletos == 5) {
      this.Total = this.Total - (this.Total * 0.1);
    } else 
    if (boletos < 3) {
      this.Total = boletos * 12;
    }


    if (tarjeta === 'si') {
      this.Total = this.Total - (this.Total * 0.1);
    }

    this.mensaje=" ";
  } else {
    this.mensaje="Lo siento:(, te pasaste de la cantidad de boletos por cantidad de personas, vuelve a intentarlo por favor";
    this.Total=0;
  }
  

  return this.Total;
}
}