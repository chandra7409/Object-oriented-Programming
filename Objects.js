// Object=>An instace of a class.when a class is defined.we instiate the class by creating an object of that class object indivisual entity that have thier propertyand types.
// const Car = {
//     name: "Echo",
//     model: "first",
//     color: "Black_white"
// }

// console.log(Car.color + " " + Car.model + " " + Car.name);
//console.log(Car.name);







/////////////////////////
//object using Object literal
//key : value

// let person = {
//     name: "sanjeet",
//     age: 100,
//     gender: "female",
//     speak: function() {
//         console.log("bleh bleh bleh");
//     },
//     sleep: function() {
//         console.log("i am sleeping :)");
//     },
//     eat: function() {
//         console.log("i am eating");
//     },
// }

// console.log(person.name);
// console.log(person.age);
// person.sleep();
// console.log(person.sleep)
// person["sleep"]();

// console.log(Object.keys(person));

// let person = [2, 3, 4, 5, 5, 8];
// for (k in person) {
//     console.log(k, person[k]);
// }
// console.log(Object.values(person)); //loop in object


//================================================

// using new keyword

// let person = new Object();
// console.log(person);
// person.name = "sanjeet";
// person.age = 100;
// person.speak = function(){
//     console.log("i can speak");
// }
// console.log(person);
// person.speak();

//================================================

// function makeObject(name, age){
//     return {
//         name,
//         age
//     }
// }
// let statement = makeObject("sanjeet", 26);
// console.log( statement );
// let vishnuObj = makeObject("vishnu", 100);
// console.log(vishnuObj);

//================================================
//writing prototype and using this keyword

// function BoysSchoolStudent(name, age){
//     this.name= name,
//     this.age=age
//     //this keyword represents the object that will be created
// }
// BoysSchoolStudent.prototype.gender = "male";

// let statement = new BoysSchoolStudent("Aayush", 26);
// console.log( statement.gender );

// let vishnuObj = new BoysSchoolStudent("vishnu", 100);
// console.log(vishnuObj.gender);

// console.log(Object.getPrototypeOf(vishnuObj));

//================================================
// using Object.create()

// const person = {
//     name : "Amar",
//     age: 20,
//     siblings : ["neha", "kushal"],
//     marks:{
//         maths: 50,
//         science: 80
//     },
//     speak: function(){
//         console.log("bleh bleh bleh");
//     }
// }
// let pObj = Object.create(person);
// pObj.name = "Anjali";
// console.log(pObj.name);

// let p1Obj = Object.create(person);
// console.log(p1Obj.name);

// const p1 = pObj;
// console.log(p1);
// console.log(p1.age);
// let p2 = p1;
// p1= p1Obj;
// console.log(p1);


//===============================
//Object.freeze() , Object.seal(), Object.isSealed()

// let person = {
//         noOfHands: 2,
//         noOfLegs: 2
//     }
//     // Object.freeze(person);
//     // console.log(person);
//     // person.noOfHands = 4;
//     // delete person.noOfHands;
//     // console.log(person);

// Object.seal(person);
// Object.freeze(person);
// console.log(person);
// person.noOfHands = 4;
// delete person.noOfHands;
// person.eyes = 2;
// console.log(person);
// console.log(Object.isSealed(person));




/////objects  in javascript