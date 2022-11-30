// Synchronous, in general, means one at a time.
// Synchronous is the sequential flow of program execution in a programming
// context.
// The program / code will be read in sequence from top to bottom and
// executed line by line, with one thing getting executed at a time.
// The Javascript engine waits
// for the code to get executed completely before
// moving to the next line.
// So Synchronous programming executes each line of code at a time in a
// sequence 
// Cons of synchronous programming:Blocks code;
// The next line of code is not executed
// until the previous is complete.
console.log('Hi');

function synchronousGreet() {
    console.log('Welcome to Synchronous Function Call');
}
synchronousGreet();