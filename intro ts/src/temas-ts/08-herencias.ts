class Persona3{
    protected nombre: string;
    protected edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log("Nombre: "+this.nombre+"Edad: "+this.edad);
    }
}

class Empleado extends Persona3{
    private sueldo:number;
    constructor(nombre:string,edad:number,sueldo:number)
    {
        super(nombre, edad);
        this.sueldo=sueldo;
    }
    imprimir(): void{
        console.log(`Sueldo ${this.sueldo}`)
    }

    pagoImpuesto(){
        if(this.sueldo > 5000)
            console.log(`${this.nombre} debe pagar impuestos`);
        else 
            console.log(`${this.nombre} no debe pagar impuestos`);
    }
}

const persona3=new Persona3('Juan',44);
persona3.imprimir();

const empleado1=new Empleado('Ana', 22,7000)
empleado1.imprimir();
empleado1.pagoImpuesto();

class Distancia {
    protected calcularDistancia(x1: number, y1: number, x2: number, y2: number): number {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangulo extends Distancia {
    private lado1: number;
    private lado2: number;
    private lado3: number;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        super();

        this.lado1 = this.calcularDistancia(x1, y1, x2, y2);
        this.lado2 = this.calcularDistancia(x2, y2, x3, y3);
        this.lado3 = this.calcularDistancia(x3, y3, x1, y1);
    }

    public esTriangulo(): boolean {
        return (this.lado1 + this.lado2 > this.lado3) &&
               (this.lado2 + this.lado3 > this.lado1) &&
               (this.lado3 + this.lado1 > this.lado2);
    }

    public imprimir(): void {
        console.log(`Lado 1: ${this.lado1.toFixed(2)}`); //Sirve para limitar los decimales
        console.log(`Lado 2: ${this.lado2.toFixed(2)}`);
        console.log(`Lado 3: ${this.lado3.toFixed(2)}`);
        if (this.esTriangulo()) {
            console.log("Es un triángulo válido.");
        } else {
            console.log("No es un triángulo válido.");
        }
    }
}

const triangulo = new Triangulo(0, 0, 3, 0, 3, 4);
triangulo.imprimir();

const triangulo2 = new Triangulo(0, 0, 2, 0, 4, 0);
triangulo2.imprimir();

