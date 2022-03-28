let div = document.getElementById('container');

//fetch request
const request = async () => {
    let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/javascript-fundamentals/main/mock_data.json')
    let res = await req.json()
    //console.log the response
    console.log('response', res)
    //for each the response (element is a parametr)
    res.forEach((element) => {
        //console.log the element
        // console.log('element', element)
        //create the img
        let img = document.createElement('img')
        let button = document.createElement('button')
        let h3 = document.createElement('h3')
        let h4 = document.createElement('h4')
        
        h3.innerText = element.company_name
        h4.innerText = `vacancies ${element.vacancies}`
        button.innerText = `rent building ${element.id}`
        
        button.addEventListener('click', () =>{
            let updatedVacancies = --element.vacancies
            if (updatedVacancies <= -1) return alert('no more vacancies') 
            h4.innerText = `vacancies: ${element.vacancies}`
        })
        
        // set the attribute of the img to the element from the array 
        img.setAttribute('src', element.photo)

        //apend the img to the div (aka the element)
        // div.appendChild(h3)
        // div.appendChild(img)
        // div.appendChild(button)
        div.append(h3, h4, img, button)
    })
}
request()