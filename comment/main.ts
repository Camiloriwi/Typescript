// Declaramos una variable llamada suma y la inicializamos con el resultado de la operación 4+6.
export let sum = 4+6;

// Imprimimos el valor de la variable suma en la consola.
console.log(sum);

// Definimos un esquema para un cliente con varias propiedades.
const ClientSchema = ({
    name: String, // Nombre del cliente
    lastName: String, // Apellido del cliente
    age: Number, // Edad del cliente
    gender: String, // Género del cliente
    email: String, // Correo electrónico del cliente
    password: String, // Contraseña del cliente
});

// Imprimimos el esquema del cliente en la consola.
console.log(ClientSchema);

// Definimos una interfaz Car con varias propiedades.
interface Car {
    name: string; // Nombre del coche
    color: string; // Color del coche
    year: number; // Año del coche
}

// Definimos una función para mostrar los detalles de un coche.
function dysplayCarDetails(car: Car): void {
    console.log("name ",car.name); // Imprimimos el nombre del coche
    console.log("color ",car.color); // Imprimimos el color del coche
    console.log("year  ",car.year); // Imprimimos el año del coche
}

// Creamos un objeto myCar con las propiedades definidas en la interfaz Car.
const myCars: Car = {
    name: "BMW", // Nombre del coche
    color: "black", // Color del coche
    year: 2024 // Año del coche
}

// Llamamos a la función dysplayCarDetails y le pasamos el objeto myCar.
dysplayCarDetails(myCars);

// Definimos una función para sumar dos números.
function sumar(numOne:number, numTwo:number) {
    return numOne + numTwo; // Devolvemos la suma de numOne y numTwo
}

// Imprimimos el resultado de la función sumar en la consola.
console.log(sumar(48,67));

// Definimos una interfaz para una casa con varias propiedades.
interface House{
    color: string; // Color de la casa
    price: number; // Precio de la casa
    bedrooms: number; // Número de habitaciones de la casa
    bathrooms: number; // Número de baños de la casa
    garage: boolean; // Indica si la casa tiene garaje o no
}

// Definimos una función para mostrar los detalles de una casa.
function houseDetails(house: House): void {
    console.log(house.color); // Imprimimos el color de la casa
    console.log(house.price); // Imprimimos el precio de la casa
    console.log(house.bedrooms); // Imprimimos el número de habitaciones de la casa
    console.log(house.bathrooms); // Imprimimos el número de baños de la casa
    console.log(house.garage); // Imprimimos si la casa tiene garaje o no
}

// Creamos un objeto myHouse con las propiedades definidas en la interfaz House.
const myHouse: House = {
    color: "black", // Color de la casa
    price: 100000, // Precio de la casa
    bedrooms: 4, // Número de habitaciones de la casa
    bathrooms: 3, // Número de baños de la casa
    garage: true // La casa tiene garaje
}
export default myCars;

export let yourHouse = myHouse;

// Imprimimos el objeto myHouse en la consola.
console.log(myHouse);

// Definimos una interfaz para un usuario con varias propiedades.
interface User {
    name: String, // Nombre del usuario
    lastName: String, // Apellido del usuario
    age: number, // Edad del usuario
    gender: String, // Género del usuario
    email: String, // Correo electrónico del usuario
    password: String, // Contraseña del usuario
    id: number; // ID del usuario
}

// Definimos una clase para una cuenta de usuario con varias propiedades.
class UsersAccount {
    name: String; // Nombre del usuario
    lastName: String; // Apellido del usuario
    age: number; // Edad del usuario
    gender: String; // Género del usuario
    email: String; // Correo electrónico del usuario
    password: String; // Contraseña del usuario
    id: number; // ID del usuario

    // Definimos un constructor para la clase UserAccount.
    constructor(name: string, id: number, lastName:string, age:number, gender:string, email:string, password: string) {
        this.name = name; // Inicializamos el nombre del usuario
        this.lastName = lastName; // Inicializamos el apellido del usuario
        this.age = age; // Inicializamos la edad del usuario
        this.gender = gender; // Inicializamos el género del usuario
        this.email = email; // Inicializamos el correo electrónico del usuario
        this.password = password; // Inicializamos la contraseña del usuario
        this.id = id; // Inicializamos el ID del usuario
    }
}

// Creamos un objeto user con las propiedades definidas en la interfaz User.
export const users: User = new UsersAccount('daniel', 1,'stiven',16,'masculino','riwi@gmail.com','1234');

// Imprimimos el objeto user en la consola.
console.log(users);

// Definimos una función genérica para obtener el primer elemento de un array.



/**
 * Devuelve el primer elemento de un array.
 * @param array - Un array de cualquier tipo.
 * @returns El primer elemento del array o undefined si el array está vacío.
 */
function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
}

/**
 * Enum que representa los días de la semana.
 */
export enum DayOfWeeks {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

/**
 * Determina si un día es fin de semana o día laboral.
 * @param day - Un valor del enum DayOfWeek que representa el día de la semana.
 * @returns Una cadena que indica si el día es "Fin de semana" o "Día laboral".
 */
export function isWeekdayOrWeekends(day: DayOfWeeks): string {
    switch (day) {
        case DayOfWeeks.Sunday:
        case DayOfWeeks.Saturday:
            return `Fin de semana`;
        default:
            return `Día laboral`;
    }
}

/**
 * Enum que representa una respuesta binaria.
 */
enum Answer {
    No = 0,
    Yes = 1
}

/**
 * Decide qué mensaje enviar a una persona.
 * @param name - El nombre de la persona.
 * @param message - Un valor del enum Answer que indica la respuesta.
 */
function decide(name: string, message: Answer): void {
    if (message === Answer.Yes) {
        console.log(`Hello, ${name}! How are you?`);
    } else {
        console.log(`Go away, ${name}!`);
    }
}

/**
 * Clase que representa a una persona.
 */
class Persona {
    #name: string; // Atributo privado

    /**
     * Constructor de la clase Persona.
     * @param name - El nombre de la persona.
     */
    constructor(name: string) {
        this.#name = name;
    }

    /**
     * Setter para el atributo name.
     * @param nuevoName - El nuevo nombre para la persona.
     * @throws Error si el nombre tiene menos de 2 caracteres.
     */
    set name(nuevoName: string) {
        if (nuevoName.length > 2) {
            this.#name = nuevoName;
        } else {
            throw new Error("El nombre debe tener al menos 2 caracteres");
        }
    }

    /**
     * Getter para el atributo name.
     * @returns El nombre de la persona con la primera letra en mayúscula.
     */
    get name() {
        return this.#name.charAt(0).toUpperCase() + this.#name.slice(1);
    }
}

/**
 * Interfaz que representa a un animal.
 */
interface IAnimals {
    name: string;
    age: number;
    sonido(): string;
}

/**
 * Clase base que representa a un animal.
 */
class Animal implements IAnimals {
    name: string;
    age: number;

    /**
     * Constructor de la clase Animal.
     * @param name - El nombre del animal.
     * @param age - La edad del animal.
     */
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    /**
     * Método que devuelve el sonido del animal.
     * @returns Una cadena que representa el sonido del animal.
     */
    sonido(): string {
        return "Este animal hace un sonido";
    }
}

/**
 * Clase que representa a un perro y hereda de la clase Animal.
 */
class Dog extends Animal {
    raza: string;

    /**
     * Constructor de la clase Dog.
     * @param name - El nombre del perro.
     * @param age - La edad del perro.
     * @param raza - La raza del perro.
     */
    constructor(name: string, age: number, raza: string) {
        super(name, age);
        this.raza = raza;
    }

    /**
     * Método que devuelve el sonido del perro.
     * @returns Una cadena que representa el sonido del perro.
     */
    sonido(): string {
        return "Guau guau!";
    }
}

/**
 * Interfaz que representa a un avión.
 */
interface IAiplanes {
    name: string;
    num: number;
    destini: string;
    Hsalida: string;
}

/**
 * Clase base que representa a un avión.
 */
class Aiplanes implements IAiplanes {
    name: string;
    num: number;
    destini: string;
    Hsalida: string;

    /**
     * Constructor de la clase Aiplanes.
     * @param name - El nombre del avión.
     * @param num - El número del avión.
     * @param destini - El destino del avión.
     * @param Hsalida - La hora de salida del avión.
     */
    constructor(name: string, num: number, destini: string, Hsalida: string) {
        this.name = name;
        this.num = num;
        this.destini = destini;
        this.Hsalida = Hsalida;
    }
}

/**
 * Clase que representa a una aerolínea y hereda de la clase Aiplanes.
 */
class AeroLinea extends Aiplanes {
    AeroLine: string;

    /**
     * Constructor de la clase AeroLinea.
     * @param name - El nombre del avión.
     * @param num - El número del avión.
     * @param destini - El destino del avión.
     * @param Hsalida - La hora de salida del avión.
     * @param empresa - El nombre de la aerolínea.
     */
    constructor(name: string, num: number, destini: string, Hsalida: string, empresa: string) {
        super(name, num, destini, Hsalida);
        this.AeroLine = empresa;
    }
}

/**
 * Ejemplo de uso de la clase Persona.
 */
try {
    const persona = new Persona("juan");
    console.log(persona.name); // "Juan"
    persona.name = "camilo";
} catch (error) {
    console.error(error);
}

/**
 * Ejemplo de uso de la clase Dog y el array de Animal.
 */
let animals: Animal[] = [
    new Animal("gato", 5),
    new Dog("firulais", 3, "chihuahua"),
    new Animal("león", 4),
    new Dog("Rex", 7, "Pastor alemán")
];

// Uso de map para obtener los nombres de los animales
let names = animals.map(animal => animal.name);
console.log(names);

// Uso de filter para obtener solo los perros
let dogs = animals.filter(animal => animal instanceof Dog);
console.log(dogs);

// Uso de reduce para obtener la edad total de los animales
let edadTotal = animals.reduce((total, animal) => total + animal.age, 0);
console.log(edadTotal);

// Uso de async/await con una Promise para simular una operación asíncrona
async function obtenerAnimal(name: string): Promise<Animal | undefined> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(animals.find(animal => animal.name === name));
        }, 2000);
    });
}

async function mostrarAnimal(name: string) {
    let animal = await obtenerAnimal(name);
    console.log(animal);
}

mostrarAnimal("firulais");

/**
 * Ejemplo de uso de la clase Aiplanes y AeroLinea.
 */
let airplanes: IAiplanes[] = [
    new Aiplanes("f16", 132, "Rusia", "12:45:12"),
    new AeroLinea("inter-express", 180, "Malasia", "23:15:20", "Singapore"),
    new Aiplanes("f26", 512, "Irán", "6:35:30"),
    new AeroLinea("brazilia", 1026, "Canadá", "14:10:15", "Qatar"),
    new Aiplanes("f18", 32, "Israel", "13:45:12"),
    new AeroLinea("continental", 180, "Dubái", "10:15:20", "Emirates"),
    new Aiplanes("carga-airplane", 1242, "Ucrania", "11:35:30"),
    new AeroLinea("Lufthansa5", 1026, "Argentina", "14:10:15", "Pacific")
];

let nameAirplane = airplanes.map(airplane => airplane.name);
console.log(nameAirplane);

let airline = airplanes.filter(airplane => airplane instanceof AeroLinea);
console.log(airline);

let sumNumA = airplanes.reduce((total, airplane) => total + airplane.num, 0);
console.log(sumNumA);
