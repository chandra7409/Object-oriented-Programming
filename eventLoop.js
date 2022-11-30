//event loop runin a single thread.want to avoid the blocking whole thread. thne non-blocking I/o define a callback that is called once the action is complete.


(function() {
    console.log(1);
    setTimeout(function() {
        console.log(2);
    }, 2000);
    setTimeout(function() {
        console.log(3)
    }, 0);
    console.log(4);
})();