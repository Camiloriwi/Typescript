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


function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
}

export enum DayOfWeeks {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
}
  
export function isWeekdayOrWeekends(day: DayOfWeeks): string {
    switch (day) {
        case DayOfWeeks.Sunday:
        case DayOfWeeks.Saturday:
            return `${DayOfWeeks.Sunday}:Fin de semana`;
        default:
            return `${DayOfWeeks.Monday}:Día laboral`;
    }
}
  

// Imprimimos el resultado de la función isWeekdayOrWeekend en la consola.
console.log(isWeekdayOrWeekends(DayOfWeeks.Sunday));










// Definición de la interfaz
interface IAnimals {
    name: string;
    age: number;
    sonido(): string;
}

// Definición de la clase base
class Animal implements IAnimals {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sonido(): string {
        return "Este animal hace un sonido";
    }
}

// Definición de una clase que hereda de la clase base
class dog extends Animal {
    raza: string;

    constructor(name: string, age: number, raza: string) {
        super(name, age);
        this.raza = raza;
    }

    sonido(): string {
        return "Guau guau!";
    }
}

// Creación de un array de animales
let animals: Animal[] = [
    new Animal("gato", 5),
    new dog("firulais", 3, "chiguagua"),
    new Animal("lion", 4),
    new dog("Rex", 7, "Pastor alemán")
];

// Uso de map para obtener los names de los animals
let names = animals.map(animal => animal.name);
console.log(names);

// Uso de filter para obtener solo los dogs
let dogs = animals.filter(animal => animal instanceof dog);
console.log(dogs);

// Uso de reduce para obtener la age total de los animals
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

mostrarAnimal("Fido");
