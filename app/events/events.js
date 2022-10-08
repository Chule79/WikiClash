import { fetchData } from '../main.js'
import { printHero } from '../main.js'
/* import { printCharacter } from '../main.js' */

export const addEvents = () => {
  const cards = document.querySelectorAll('.cromo')
  cardsEvents(cards)
}

export const cardsEvents = (array) => {
  array.forEach((card) => {
    card.addEventListener('click', async (e) => {
      const value = e.target.dataset.number
      const data = await fetchData()
      const heroContainer = document.querySelector('.heroCont')
      heroContainer.remove()
      printHero(data, Number(value))
    })
  })
}

export const counterEvent = () => {
  const counters = document.querySelectorAll('.counter')
  counters.forEach((counter) => {
    counter.addEventListener('click', async (e) => {
      const value = e.target.dataset.number
      const data = await fetchData()
      const heroContainer = document.querySelector('.heroCont')
      heroContainer.remove()
      printHero(data, Number(value))
    })
  })
}
