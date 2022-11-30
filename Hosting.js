// hoisting allows you to use functions and variables before they 're declared. In this post, we'll
// learn what hoisting is and how it works


// hoisting
function codeHoist() {
    a = 10;
    let b = 50;
}
codeHoist();

console.log(a); // 10
console.log(b); // ReferenceError : b is not defined