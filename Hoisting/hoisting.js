


//before even the execution of this code a 
//this function will be staored as copy of function itself


 
getName()//this getname function will be hoisted to the top of the code and will be executed

function getName(){
    console.log("may name is pratham")
}

///here in the execution  context the function will be treated as variable
//and we know that the variable is stored as undefined in the execution call stack
//so the function will be stored as undefined

getName2()//this will give error as the function is stored as undefined

const name= function getName2(){
    console.log("name2")
}

//precedence of hoisting
//1.function declaration>variable declaration

var double;
function double(num){
    return num*2
}
console.log(typeof double) // output: function

//2.variable assignment>function declaration

var square=4;
function square(num){
    return num*num;
}
console.log(typeof square) //output: number


