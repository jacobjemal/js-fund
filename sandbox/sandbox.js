//find
const div = document.getElementById('container');
console.log('div is:', div)

const paragraphs =  document.getElementsByTagName('p')
console.log('paragraphs is:', paragraphs)

const boxes = document.getElementsByClassName('box')
console.log('boxes is:', boxes)

// change
div.innerHTML = '<h1>Container</h1>'
div.id = 'container2'

Array.from(boxes).forEach((box) => {
    box.style.height = '50px'
    box.style.width = '50px'
    box.style.backgroundColor = 'red'
    box.style.margin ='5px'
})

let h1 = document.createElement('h1')
h1.innerText = 'newly created element'
document.body.append(h1)

// document.body.removeChild(h1)
document.write("<h1 style text-align:center>Test</h1>")


let h2 = document.createElement('h2')
h2.innerText = 'newly replaced element'
document.body.replaceChild(h2, h1)

h2.addEventListener('mouseover', ()=>{
    h2.style.border = '1px solid red'
})