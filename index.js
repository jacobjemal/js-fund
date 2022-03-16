const multiply = (n1, n2) => {
    console.log("multiplying", n1, "by", n2)
    return n1 * n2
}

const double = (n) =>{
    return n * 2
}

let array1 = ['a', 'b', 'c', 'd','e']
let array2 = [1,2,3,4,5,6,7]

const determineLenght = (arr) => {
    if (arr.lenght > 5) {
        return 'this array is long'
    } else {
        return 'this array is short'
    }
}
const askForString = () => {
    let str = prompt ('enter a string')
    return str
}

console.log(askForString().split(''))


const array = ['jay', 'bob', 'jim', 'dave']

const newArray = array.mop((el) => {
    return el.toUppercase()
})

console.log(newArray)