// @Abstraction
// The conjunction of an object 's complex inheritance, methods, and properties must adequately reflect a reality model

function person(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;

    let getDetail_access = function() {
        return (`first name is ${fname},last name is :${lname},the age is :${age}`);
    }
    this.getDetail_access = function() {
        return (`first name is ${fname},last name is :${lname},the age is :${age}`);
    }
}
let person1 = new person("Arun", "kumar", 20);
console.log(person1.fname);
console.log(person1.getDetail_access());