// Polymorphism
// Poly means "many"
// and morphism means "forms".Different classes might define the same method or property.
// For a more extensive description of object - oriented programming, see Object - oriented programming at
class Animal {
    static xyz = "123";
    eat() {

        console.log("Animal is eating");
    }
}

/**
 * extend keyword is used to express the parent child relationship
 */

class Dog extends Animal {

}

const dog = new Dog();
dog.eat();
console.log(Dog.xyz);




///Another Method the polymorphism in javascript



// class Parent {
//     eat() {
//         console.log("Parents are eating ")
//     }
// }
// class Child1 extends Parent {
//     eat() {
//             console.log("Child1 is eating the food")
//         }
//         // eat(rice, dal) {
//         //     console.log("Eating" + rice + " " + dal);
//         // }
// }
// // const ChildObj = new Child1();
// // ChildObj.eat();
// class Child2 extends Parent {
//     eat() {
//         console.log("child2 is eating");
//     }
// }


// const p1 = new Parent();
// const P2 = new Child1();
// const p3 = new Child2();
// p1.eat();
// P2.eat();
// p3.eat();