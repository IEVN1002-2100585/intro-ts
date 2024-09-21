import { Distancia } from "./distancia";
class Triangulo extends Distancia {
    protected punto1: number;
    protected punto2: number;
    protected punto3: number;
    protected x3: number;
    protected y3: number;

    protected triangulo:boolean;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        super(x1, y1, x2, y2); 
        this.x3=x3;
        this.y3=y3;
        this.punto1=0;
        this.punto2=0;
        this.punto3=0;
        this.triangulo=false;
    }


    public esTriangulo() {
        console.log(this.x1,this.y1);
        this.punto1 = this.calcularDistancia(this.x1,this.y1, this.x2, this.y2);
        this.punto2 = this.calcularDistancia(this.x1, this.y1, this.x3, this.y3);
        this.punto3 = this.calcularDistancia(this.x2, this.y2, this.x3, this.y3);

        if((this.punto1 + this.punto2 > this.punto3) &&
        (this.punto2 + this.punto3 > this.punto1) &&
        (this.punto3 + this.punto1 > this.punto2))
        return this.triangulo=true
        else 
        return this.triangulo=false 
    }

    public imprimir(): void {
        console.log(this.triangulo);
        if (this.triangulo) {
            console.log("ES UN TRIÁNGULOOO :D");
        } else {
            console.log("NO ES UN TRIÁNGULO D:");
        }
    }
}


const triangulo1 = new Triangulo(0, 1, 3, 0, 3, 4);
triangulo1.esTriangulo();
triangulo1.imprimir();

const triangulo2 = new Triangulo(0, 0, 2, 0, 4, 0);
triangulo2.imprimir();

const triangulo3 = new Triangulo(0, 0, 4, 0, 2, 3); 
triangulo3.imprimir();

const triangulo4 = new Triangulo(3, 1, 5, 10, 9, 3); 
triangulo4.imprimir();

const triangulo5 = new Triangulo(3, 1, 2, 1, 1, 1); 
triangulo5.imprimir();


