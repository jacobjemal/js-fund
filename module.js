










const quiz = () => {
    let myName = prompt('enter you name')
    let month = prompt('what month were you born?')
    let food = prompt('what is your favorite food')
    console.log('my name is', myName)
    console.log('i was born in', month)
    console.log('my favorite food is', food)
}

const print = () => {
    console.log('I love to print text!')
}

const functionA = (f) => {
    console.log('FUNCTION A HAS BEEN CALLED')
    // functionB()
    f()
}

const functionB = () => {
    console.log('FUNCTION B HAS BEEN CALLED')
}

const functionC = () => {
    console.log('FUNCTION C HAS BEEN CALLED')
}
setInterval(functionC, 1000)

const greet = (person) => {
    console.log('HELLO', person)
}

const blender = (string) => {
    return string.split('')
}

const square = (num, message) => {
    console.log('message:', message)
    return num * num 
}












// function notifyB() {
// name: function() {
// console.log('this is', this)
//     }
// }

// const notifyA = () => {
//     name: () =>{
// console.log('this is', this)
//     }
// }