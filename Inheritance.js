//defination of Inheritance=>A class can inherit characteristic from Anotther class.

// .Implement scenario of Inheritance using Department example

class department {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return (`Name of department: ${this.name}`);
    }
}
class ComputerScience extends department {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()},Department ID: ${this.id}`);
    }
}
let departmentInfo = new department('Computer Science', 22);
console.log(departmentInfo.toString());