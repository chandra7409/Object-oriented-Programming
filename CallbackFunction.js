// Callbacks: We need to note that Callbacks are used inside Browser API / Web API functions or events.
// These APIs internally accept callback functions to achieve asynchronous programming.They have
// methods such as setTimeout and event handlers like click, mouse over, scroll, etc.

function greet(callbackFn) {
    callbackFn();
    console.log('Welcome toGrandline ');
}
greet(function() {
    console.log('Hi')
});
// Hi
// Welcome to Grandline