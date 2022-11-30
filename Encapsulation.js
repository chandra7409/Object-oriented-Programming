// Encapsulation– The process of wrapping properties and functions within a single unit is known as encapsulation.
// Let’ s understand encapsulation with an example / .

// @Encapsulation
// A method of bundling the data and methods that use the data.

//Encapsulation in javascript object oreinted programming
class person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    Add_address(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`name is ${this.fname},${this.lname},${this.age},Address is : ${this.add}`)
    }
}

let person1 = new person("Tilak", "Chandra", 21);
person1.Add_address("Barielly");
person1.getDetails();