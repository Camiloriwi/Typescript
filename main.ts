// Declaramos una variable llamada suma y la inicializamos con el resultado de la operación 4+6.
let suma = 4+6;

// Imprimimos el valor de la variable suma en la consola.
console.log(suma);

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
const myCar: Car = {
    name: "BMW", // Nombre del coche
    color: "black", // Color del coche
    year: 2024, // Año del coche
}

// Llamamos a la función dysplayCarDetails y le pasamos el objeto myCar.
dysplayCarDetails(myCar);

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
class UserAccount {
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
const user: User = new UserAccount('cristian', 1,'camilo',16,'masculino','riwi@gmail.com','1234');

// Imprimimos el objeto user en la consola.
console.log(user);

// Definimos una función genérica para obtener el primer elemento de un array.
function getFirstElement<T>(array: T[]): T | undefined {
    return array[0]; // Devolvemos el primer elemento del array
}

// Definimos un enumerado para los días de la semana.
enum DayOfWeek {
    Sunday, // Domingo
    Monday, // Lunes
    Tuesday, // Martes
    Wednesday, // Miércoles
    Thursday, // Jueves
    Friday, // Viernes
    Saturday, // Sábado
}

// Definimos una función para determinar si un día es laboral o de fin de semana.
function isWeekdayOrWeekend(day: DayOfWeek): string {
    switch (day) {
        case DayOfWeek.Sunday: // Si el día es domingo
        case DayOfWeek.Saturday: // Si el día es sábado
            return 'Fin de semana'; // Devolvemos 'Fin de semana'
        default: // En cualquier otro caso
            return 'Día laboral'; // Devolvemos 'Día laboral'
    }
}

// Imprimimos el resultado de la función isWeekdayOrWeekend en la consola.
console.log(isWeekdayOrWeekend(DayOfWeek.Sunday));
