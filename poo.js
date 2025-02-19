//1. Abstracción: definir una clase (plantilla) de una figura geométrica
class figura{
    constructor(color){ //el método constructor se asegura de que los objetos tengan las propiedades necesarias para funcionar
        this.color = color;
    }

    //metodos: son las acciones que puede realizar un objeto
    calcularArea(){
        throw new Error("El método no ha sido implementado.")
    }

    obtenerColor(){
        return this.color
    }
}

//2. Herencia: creamos subclases específicas a partir de la clase padre "figura"
class circulo extends figura{
    constructor(color, radio){
        super(color);
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio * this.radio;
    }
}

class rectangulo extends figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.altura * this.base;
    }
}

//3. crear mis objetos (instanciar)
const miCirculo = new circulo("Morado", 14);
const miRectangulo = new rectangulo("Verde", 12, 6);

console.log("Color del circulo:", miCirculo.obtenerColor());
console.log("Color del rectangulo:", miRectangulo.obtenerColor());

// 4. Polimorfismo: un objeto puede ser el mismo trabajo de forma diferente
function mostrarArea(figura){
    console.log(figura.calcularArea())
}

mostrarArea(miCirculo);
mostrarArea(miRectangulo);