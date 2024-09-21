export class Distancia {
    protected x1: number;
    protected y1: number;
    protected x2: number;
    protected y2: number;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    public calcularDistancia(x1: number, y1: number, x2: number, y2: number): number {
        const dx = x2 - x1; 
        const dy = y2 - y1; 
        return Math.sqrt(dx * dx + dy * dy); 
    }

    public imprimirDistancia(): void {
        const distancia = this.calcularDistancia(this.x1, this.y1, this.x2, this.y2);
        console.log(`La distancia entre (${this.x1}, ${this.y1}) y (${this.x2}, ${this.y2}) es: ${distancia.toFixed(2)}`);
    }
}

const distancia1 = new Distancia(0, 0, 3, 4);
distancia1.imprimirDistancia(); 

const distancia2 = new Distancia(1, 2, 2, 1);
distancia2.imprimirDistancia();