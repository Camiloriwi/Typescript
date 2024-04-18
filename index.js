"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let suma = 4 + 6;
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
console.log(Car);
function dysplayCarDetails(car) {
    console.log("name ", car.name);
    console.log("color ", car.color);
    console.log("year  ", car.year);
}
const myCar = {
    name: "BMW",
    color: "black",
    year: 2024,
};
dysplayCarDetails(myCar);
function sumar(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(sumar(47, 69));
function houseDetails(house) {
    console.log(house.color);
    console.log(house.price);
    console.log(house.bedrooms);
    console.log(house.bathrooms);
    console.log(house.garage);
}
const myHouse = {
    color: "black",
    price: 100000,
    bedrooms: 4,
    bathrooms: 3,
    garage: true
};
console.log(myHouse);
class UserAccount {
    name;
    lastName;
    age;
    gender;
    email;
    password;
    id;
    constructor(name, id, lastName, age, gender, email, password) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.id = id;
    }
}
const user = new UserAccount('cristian', 1, 'camilo', 16, 'masculino', 'riwi@gmail.com', '1234');
console.log(user);
function getFirstElement(array) {
    return array[0];
}
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
function isWeekdayOrWeekend(day) {
    switch (day) {
        case DayOfWeek.Sunday:
        case DayOfWeek.Saturday:
            return `Fin de semana`;
        default:
            return `:Día laboral`;
    }
}
console.log(isWeekdayOrWeekend(DayOfWeek.Sunday));
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
function decide(name, message) {
    if (message === Answer.Yes) {
        console.log(`Hello, ${name}! How are you?`);
    }
    else {
        console.log(`Go away, ${name}!`);
    }
}
decide("Andreita", Answer.Yes);
class Persona {
    #name; // Definimos el tipo del atributo 'name'
    constructor(name) {
        this.#name = name;
    }
    set name(nuevoName) {
        if (nuevoName.length > 2) {
            this.#name = nuevoName;
        }
        else {
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
}
catch (error) {
    console.error(error);
}
const main_1 = require("./comment/main");
const main_2 = require("./comment/main");
const main_3 = require("./comment/main");
const main_4 = require("./comment/main");
const main_5 = require("./comment/main");
console.log(main_1.sum);
console.log(main_2.users);
console.log((0, main_3.isWeekdayOrWeekends)(main_3.DayOfWeeks.Sunday));
console.log(main_5.default);
console.log(main_4.yourHouse);
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sound() {
        return "This animal makes a sound";
    }
}
class Dog extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    sound() {
        return "Bark bark!";
    }
}
let animals = [
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
async function getAnimal(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(animals.find(animal => animal.name === name));
        }, 2000);
    });
}
async function showAnimal(name) {
    let animal = await getAnimal(name);
    console.log(animal);
}
showAnimal("firulais");
class Airplanes {
    name;
    num;
    destination;
    departureTime;
    constructor(name, num, destination, departureTime) {
        this.name = name;
        this.num = num;
        this.destination = destination;
        this.departureTime = departureTime;
    }
}
class Airline extends Airplanes {
    airline;
    constructor(name, num, destination, departureTime, company) {
        super(name, num, destination, departureTime);
        this.airline = company;
    }
}
let airplanes = [
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
//# sourceMappingURL=index.js.map