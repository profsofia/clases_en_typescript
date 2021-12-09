//Import stylesheets
import './styles.css';
// Escribimos TS code.
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Estoy escribiendo clases</h1>`;
console.log("Hola mundo");
/**En el siguiente ejemplo vamos a mostrar por consola la CLASE PERSONA  que fue decorada */
function DecoradorPerosona(data: string){
return function <T extends { new(...args: any[]):{} }>(constructor: T)
{return class extends constructor{
    array =data.split(",");
    Nombre = this.array[0];
    Apellido = this.array[1];
}
}
}
@DecoradorPerosona("Carlos, juanito")
class Persona{
    //ponemos los atributos
    public name:string;
    public lastName:string;
    readonly añoDeNac:number;
    //constructor!
    constructor(name:string, lastName:string){
        this.name = name;
        this.lastName;
    } 
    //method
    edadDePersona(añoActual:number):number{
        return añoActual- this.añoDeNac;
    }  

}
/**Al momento de instanciar el objeto a través de su constructor y luego acceder a la propiedad Nombre, podremos observar que ésta fue reemplazada por  Carlos juanito. */
//instanciar por medio de un constructor de la clase.
let persona = new Persona("julio", "berne");
console.log(persona.toString());
let persona2 = new Persona("García", "Marquez");
console.log(persona2.toString());
//instanciar: por referencia a variables.
let persona3 = new Persona("","");
persona3.name = "jorge";
persona3.lastName = "Borges";
