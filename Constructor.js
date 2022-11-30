// class Car {
//     constructor(name, model) {
//         this.name = name;
//         this.model = model;
//     }
// }

// let tata = new Car("Yenova", 2023)
// console.log(tata);




///another eample of the constructor

//object using the construcor
function person(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}
//creating new instances of person object
let person1 = new person('Mukul', 'Latiyan', 30);
let person2 = new person('Rahul', 'Avasthi', 23);

console.log(person1.fname);
console.log(`${person2.fname} ${person2.lname} ${person2.age}`);




////Another type write the class in javascript




// class Employee {
//     constructor(name, id, gender) {
//         this.name = name;
//         this.id = id;
//         this.gender = gender;
//     }
//     detail() {
//         console.log(this.name + " " + this.id + " " + this.gender);
//     }
// }
// var e1 = new Employee("Arun", 190018, "male");
// e1.detail();