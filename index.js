var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Import stylesheets
import './styles.css';
// Escribimos TS code.
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Estoy escribiendo clases</h1>`;
console.log("Hola mundo");
/**En el siguiente ejemplo vamos a mostrar por consola la CLASE PERSONA  que fue decorada */
function DecoradorPerosona(data) {
    return function (constructor) {
        return class extends constructor {
            array = data.split(",");
            Nombre = this.array[0];
            Apellido = this.array[1];
        };
    };
}
let Persona = class Persona {
    //ponemos los atributos
    name;
    lastName;
    añoDeNac;
    //constructor!
    constructor(name, lastName) {
        this.name = name;
        this.lastName;
    }
    //method
    edadDePersona(añoActual) {
        return añoActual - this.añoDeNac;
    }
};
Persona = __decorate([
    DecoradorPerosona("Carlos, juanito")
], Persona);
/**Al momento de instanciar el objeto a través de su constructor y luego acceder a la propiedad Nombre, podremos observar que ésta fue reemplazada por  Carlos juanito. */
let persona = new Persona("julio", "berne");
console.log(persona.toString());
