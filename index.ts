
let suma = 4+6;

console.log(suma);

const ClientSchema = ({
    name: String,
    lastName: String,
    age: Number,
    gender: String,
    email: String,
    password: String,
});

console.log(ClientSchema);

 let Car;
 interface Car {
     name: string;
     color: string;
     year: number;
 }

 console.log(Car);


 function dysplayCarDetails(car: Car): void {
     console.log("name ",car.name);
     console.log("color ",car.color);
     console.log("year  ",car.year);
 }

 const myCar: Car = {
     name: "BMW",
     color: "black",
     year: 2024,
}
 dysplayCarDetails(myCar);



function sumar(numOne:number, numTwo:number) {
    return numOne +numTwo;
}


console.log(sumar(47,69));




interface House{
    color: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    garage: boolean;
}

function houseDetails(house: House): void {
    console.log(house.color);
    console.log(house.price);
    console.log(house.bedrooms);
    console.log(house.bathrooms);
    console.log(house.garage);
}

const myHouse: House = {
    color: "black",
    price: 100000,
    bedrooms: 4,
    bathrooms: 3,
    garage: true
}

console.log(myHouse);




interface User {
    name: String,
    lastName: String,
    age: number,
    gender: String,
    email: String,
    password: String,
    id: number;
  }
   
  class UserAccount {
    name: String;
    lastName: String;
    age: number;
    gender: String;
    email: String;
    password: String;
    id: number;
   
    constructor(name: string, id: number, lastName:string, age:number, gender:string, email:string, password: string) {
      this.name = name;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.email = email;
      this.password = password;
      this.id = id;
    }
  }
   
 
const user: User = new UserAccount('cristian', 1,'camilo',16,'masculino','riwi@gmail.com','1234');
console.log(user);



function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
}

enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}
  
function isWeekdayOrWeekend(day: DayOfWeek): string {
    switch (day) {
        case DayOfWeek.Sunday:
        case DayOfWeek.Saturday:
            return `Fin de semana`;
        default:
            return `:Día laboral`;
    }
}
  

console.log(isWeekdayOrWeekend(DayOfWeek.Sunday));






enum Answer {
    No = 0,
    Yes = 1
}
  
function decide(name: string, message: Answer): void {
    if (message === Answer.Yes) {
      console.log(`Hello, ${name}! How are you?`);
    } else {
      console.log(`Go away, ${name}!`);
    }
}
  

decide("Andreita", Answer.Yes);
  

class Persona {
    #name: string; // Definimos el tipo del atributo 'name'
  
    constructor(name: string) {
      this.#name = name;
    }
  
    set name(nuevoName: string) {
      if (nuevoName.length > 2) {
        this.#name = nuevoName;
      } else {
        throw new Error("El nombre debe tener al menos 2 caracteres");
      }
    }
  
    get name() {
      return this.#name.charAt(0).toUpperCase() + this.#name.slice(1);
    }
}
  
try {
    const persona = new Persona("juan");
    console.log(persona.name); // "Juan"
    persona.name = "camilo"; // El name debe tener al menos 2 caracteres
} catch (error) {
    console.error(error);
}
  

import { sum } from "./comment/main";
import { users } from "./comment/main";
import { DayOfWeeks ,isWeekdayOrWeekends } from "./comment/main";
import {yourHouse} from  "./comment/main";
import  myCars  from "./comment/main";

console.log(sum);
console.log(users);
console.log(isWeekdayOrWeekends(DayOfWeeks.Sunday));

console.log(myCars);


console.log(yourHouse);



interface IAnimals {
    name: string;
    age: number;
    sound(): string;
}

class Animal implements IAnimals {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sound(): string {
        return "This animal makes a sound";
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    sound(): string {
        return "Bark bark!";
    }
}

let animals: Animal[] = [
    new Animal("cat", 5),
    new Dog("firulais", 3, "chihuahua"),
    new Animal("lion", 4),
    new Dog("Rex", 7, "German Shepherd")
];

let names = animals.map(animal => animal.name);
console.log(names);

let dogs = animals.filter(animal => animal instanceof Dog);
console.log(dogs);

let totalAge = animals.reduce((total, animal) => total + animal.age, 0);
console.log(totalAge);

async function getAnimal(name: string): Promise<Animal | undefined> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(animals.find(animal => animal.name === name));
        }, 2000);
    });
}

async function showAnimal(name: string) {
    let animal = await getAnimal(name);
    console.log(animal);
}

showAnimal("firulais");

interface IAirplanes {
    name: string;
    num: number;
    destination: string;
    departureTime: string;
}

class Airplanes implements IAirplanes {
    name: string;
    num: number;
    destination: string;
    departureTime: string;

    constructor(name: string, num: number, destination: string, departureTime: string) {
        this.name = name;
        this.num = num;
        this.destination = destination;
        this.departureTime = departureTime;
    }
}

class Airline extends Airplanes {
    airline: string;

    constructor(name: string, num: number, destination: string, departureTime: string, company: string) {
        super(name, num, destination, departureTime);
        this.airline = company;
    }
}

let airplanes: IAirplanes[] = [
    new Airplanes("f16", 132, "Russia", "12:45:12"),
    new Airline("inter-express", 180, "Malaysia", "23:15:20", "Singapore"),
    new Airplanes("f26", 512, "Iran", "6:35:30"),
    new Airline("brazilia", 1026, "Canada", "14:10:15", "Qatar"),
    new Airplanes("f18", 32, "Israel", "13:45:12"),
    new Airline("continental", 180, "Dubai", "10:15:20", "Emirates"),
    new Airplanes("cargo-airplane", 1242, "Ukraine", "11:35:30"),
    new Airline("Lufthansa5", 1026, "Argentina", "14:10:15", "Pacific")
];

let airplaneNames = airplanes.map(airplane => airplane.name);
console.log(airplaneNames);

let airlines = airplanes.filter(airplane => airplane instanceof Airline);
console.log(airlines);

let totalNum = airplanes.reduce((total, airplane) => total + airplane.num, 0);
console.log(totalNum);
