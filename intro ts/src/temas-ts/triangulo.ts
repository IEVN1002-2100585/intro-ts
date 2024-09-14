import { Distancia } from "./distancia";
class Triangulo extends Distancia {
    private punto1: number;
    private punto2: number;
    private punto3: number;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        super(x1, y1, x2, y2); 
        this.punto1 = this.calcularDistancia(x1, y1, x2, y2);
        this.punto2 = this.calcularDistancia(x2, y2, x3, y3);
        this.punto3 = this.calcularDistancia(x3, y3, x1, y1);
    }

    public esTriangulo(): boolean {
        return (this.punto1 + this.punto2 > this.punto3) &&
               (this.punto2 + this.punto3 > this.punto1) &&
               (this.punto3 + this.punto1 > this.punto2);
    }

    public imprimir(): void {

        if (this.esTriangulo()) {
            console.log("ES UN TRIÁNGULOOO :D");
        } else {
            console.log("NO ES UN TRIÁNGULO D:");
        }
    }
}


const triangulo1 = new Triangulo(0, 0, 3, 0, 3, 4);
triangulo1.imprimir();

const triangulo2 = new Triangulo(0, 0, 2, 0, 4, 0);
triangulo2.imprimir();

const triangulo3 = new Triangulo(0, 0, 4, 0, 2, 3); 
triangulo3.imprimir();

const triangulo4 = new Triangulo(3, 1, 5, 10, 9, 3); 
triangulo4.imprimir();

const triangulo5 = new Triangulo(3, 1, 2, 1, 1, 1); 
triangulo5.imprimir();


