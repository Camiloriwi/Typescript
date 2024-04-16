
let sum = 4+6;

console.log(sum);

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
        return 'Fin de semana';
      default:
        return 'Día laboral';
    }
}
  


console.log(isWeekdayOrWeekend(DayOfWeek.Sunday));




