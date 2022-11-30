//closure is a both function  objects and scope where function variables are resovled is called a closure.
function add(x) {
    return function(y) {
        return x + y;
    }

}
var addition = add(5);
console.log(addition(6));