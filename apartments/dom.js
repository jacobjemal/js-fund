let cards = document.getElementsByClassName("card")
cards = Array.from(cards)
console.log(cards)

cards.forEach((card)=> {
    card.eventListener('click', () => {
        card.classList.toggle('transparent')
        alert('Card was clicked')
    })
})