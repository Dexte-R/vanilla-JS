// block scope
{
    var x = 1 // global 
    let y = 2 // local
    const z = 3 // local 
}

// console.log(x) // 1
// console.log(y) // ReferenceError; not defined
// console.log(z) // ReferenceError; not defined

var x = 4 // replaces previous instance of x
let y = 5 // new instance
const z = 6 // new instance

// console.log(x) // 4
// console.log(y) // 5
// console.log(z) // 6

// function scope
function scope() {
    // these declarations are only available within this function
    var x = 7 
    let y = 8 
    const z = 9 

}

// still logs the same values as before scope() declared
console.log(x) // 4
console.log(y) // 5
console.log(z) // 6

// lexical scoping
function parent() {
    let x = 10
    function child() {
        // nested function has access to the scope of its parent function
        console.log(x)
    }
    child()
}
parent() // 10

// closures
function add(number1) {
    function add2(number2) {
        return number1 + number2
    }
    return add2
}

let sum1 = add(1) // sum1 contains its own lexical environment where number1 = 1
let sum2 = add(3) // sum2 contains its own lexical environment where number1 = 3

// number1 still exists in the respective lexical environments although the function call for add() has completed
console.log(sum1(2)) // 3
console.log(sum2(2)) // 5