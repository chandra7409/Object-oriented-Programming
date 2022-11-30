// In the real world, callbacks are most often used with asynchronous functions.
//Functions running in parallel with other functions are called asynchronous.
//Asynchronous means that things can happen independently of the main program flow.


// Async / Await: Async Await keywords were introduced in Javascript in ECMAScript 2017. This made
// asynchronous programming easier and is considered a better alternative to promises

function asynchronousGreet(callbackFn) {
    callbackFn();
    console.log('Welcome to Asynchronous Function Call');
}


asynchronousGreet(() => console.log('Hello!! '));