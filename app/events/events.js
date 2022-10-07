import { getData } from '../services/api.js'
import { printCharacter } from '../main.js'

export const addEvents = () => {
  const counters = document.querySelectorAll('.counter')
  const cards = document.querySelectorAll('.cromo')
  print(cards)
}


const print = (array) => {
  array.forEach((card) => {
    card.addEventListener('click', async (e) => {
      const cardId = e.target.id
      const data = await getData()
      const character = data.filter((item) => item.id == cardId)
      console.log(character)
      printCharacter(character[0], data)
    })
    console.log(print)
  })
}

