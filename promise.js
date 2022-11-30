/**
 * Promises :promises are objects in javascript that let us perform asynchronous operations and also its resulting value is known as a promise.
 *     1. Completed  | resolve
 *     2. Broken     | reject
 *     3. Still in progress | pending
 */



/**
 * 
 * @returns This function will return promise
 */

//console.log("Stating to learn Promise");
// function func1() {
//     return new Promise(function(resolve, reject) {
//         //Mimic some time that it will take for computation
//         setTimeout(() => {
//             const err = true;

//             if (!err) {
//                 console.log("Promise fulfilled");
//                 resolve();
//             } else {
//                 console.log("Promise broken :( ");
//                 reject();
//             }
//         }, 3000);
//     })
// }


// /**
//  * What should I do if the promise is success
//  */
// function dance() {
//     console.log("See he fulfilled his promised, let's dance !!!");
// }

// /**
//  * If the promise is broken
//  */
// function planB() {
//     console.log("he broke his promise, let me prepare for IAS now .. #Thukrake mei intekaam ");
// }
// //.log(func1());
// //func1().then(dance).catch(planB);

// //console.log('Done');

// /**
//  * You work for relvel, and you need to do following things
//  * 
//  * 1. Enroll a new student in a course
//  * 2. Fetch the list of all the students enrolled in the course
//  */

// /**
//  * List of students
//  */
// const students = [
//     { name: "Vishwa", age: 99 },
//     { name: "Mohan", age: 96 }
// ]

// /**
//  * LOGIC to enrol the students
//  */


// function enrollStudents(student, fetchStudents) {

//     setTimeout(() => {
//         students.push(student);
//         console.log("Students enrolled");
//     }, 3000);

//     fetchStudents();
// }

// /**
//  * Logic to fetch the students
//  */
// function fetchStudents() {
//     setTimeout(() => {
//         console.log("Fetching studetns :");
//         console.log(students);
//     }, 2000);
// }

// //enrollStudents({name:"Abc", age:99},fetchStudents);

// /**
//  * This function will promise me that stundent will be enrolled
//  */
// function enrollStudentPromise(student) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             students.push(student);
//             console.log("students got enrolled");
//             resolve(); // fetchStudents()
//         }, 3000);
//     })
// }

// //enrollStudentPromise({name : "Akansha", age:34}).then(fetchStudents);





///another the method of promiss
async function vishwa() {
    const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data");
            resolve();
        }, 2000);
    })

    console.log("Before returing");
    return response;
}
const output = vishwa();

console.log(output);

output.then(() => { console.log("hello") });

console.log("Completed");