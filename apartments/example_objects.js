const laptop = {
    price: 1000,
    brand: 'HP',
    memory: '2GB',
    color: 'pink'
}

const car = {
    engine: 'V8',
    doors: 2,
    modle: 'BMW',
    price: '200000',
    make: 'M4'
}

const company = {
    name: 'vittles',
    ceo: 'Michael Law',
    isTheBest: true,
    publiclyTraded: false
}

const room = {
    windows: 0,
    dimensions: '200x200',
    closet: false,
    pets: false
}
const item = {
    name: 'exaclibur',
    attackPower: 130
}

const ally = {
    name: 'geralt',
    power: { name: 'kamehameha', attackPower: 9000 }
}
const character = {
    hairColor: 'blue',
    hight: "6'7",
    race: 'elf',
    gender: null,
    strength: Infinity,
    dlc: false,
    class: 'mage',
    cohort: '031422',
    ally: {
        name: 'geralt',
        power: { name: 'kamehameha', attackPower: 9000 }
    }
}

console.log(character, room, company, car, laptop, item, ally)

console.log(character.ally)