
let data;

const request = () => {
    fetch('https://raw.githubusercontent.com/jacobjemal/js-fund/main/user.json')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log('data returned is', data)
        return data
    })
    return 'done with function'
}

const request2 = async () => {
    let req = await fetch('https://raw.githubusercontent.com/jacobjemal/js-fund/main/user.json')
    let res = await req.json() 
    data = res
    console.log("data", data)
    return res
}

console.log('Data is', data)
