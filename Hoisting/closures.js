function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
    return y;
}
var z = x();
console.log(z);
////--1000s of lines of code--////
z();
//output: 7
//though the function y is returned from the function x and stored in z
//the function y still has access to the variable a even after the function x has been executed and removed from the call stack
//this is called closure
//therefore closure is function along with its lexical scope bundle together


//another example of closure
function z(){
    var b = 900;
    function y(){
        console.log(b);
    }
    y();
}
z();