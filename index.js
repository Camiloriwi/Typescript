var suma = 4 + 6;
console.log(suma);
var ClientSchema = ({
    name: String,
    lastName: String,
    age: Number,
    gender: String,
    email: String,
    password: String,
});
console.log(ClientSchema);
var Car;
console.log(Car);
function dysplayCarDetails(car) {
    console.log("name ", car.name);
    console.log("color ", car.color);
    console.log("year  ", car.year);
}
var myCar = {
    name: "BMW",
    color: "black",
    year: 2024,
};
dysplayCarDetails(myCar);
function sumar(numOne, numTwo) {
    return 4 + 67;
}
console.log(sumar(4, 67));
function houseDetails(house) {
    console.log(house.color);
    console.log(house.price);
    console.log(house.bedrooms);
    console.log(house.bathrooms);
    console.log(house.garage);
}
var myHouse = {
    color: "black",
    price: 100000,
    bedrooms: 4,
    bathrooms: 3,
    garage: true
};
console.log(myHouse);
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id, lastName, age, gender, email, password) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount('cristian', 1, 'camilo', 16, 'masculino', 'riwi@gmail.com', '1234');
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
            return 'Fin de semana';
        default:
            return 'Día laboral';
    }
}
console.log(isWeekdayOrWeekend(DayOfWeek.Sunday));
