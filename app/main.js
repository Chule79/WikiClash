import './style.css'
import { getData } from './services/api.js'
// Components
import { headerComponent } from './components/nav-component/nav-comp.js'
import { heroComponent } from './components/hero/component.js'
import { cardComponent } from './components/card/component.js'
import { counterComp } from './components/counter/component.js'
// Events
import { addEvents } from './events/events.js'
import { counterEvent } from './events/events.js'

// get array of all characters
export const fetchData = async () => {
  const data = await getData()
  return data
}

// get character obj from data array
const getCharacterByName = (array, name) => {
  return array.filter((item) => item.name === name)[0]
}

// get character obj by id
const getCharacterById = (array, id) => {
  return array.filter((item) => item.id === id)[0]
}

// get character
const getCharacter = (array, param) => {
  if (typeof param === 'string') {
    return getCharacterByName(array, param)
  } else {
    return getCharacterById(array, param)
  }
}

// print hero component
export const printHero = (data, param) => {
  const details = document.querySelector('#details')
  const character = getCharacter(data, param)
  details.innerHTML += heroComponent(character)
    
    const porfavor = document.querySelector("#detailsC")
    const sobreado = () => {
    if(character.maxLevel == 14){
      detailsC.style.cssText ="box-shadow: 0 0 90px rgba(31, 32, 35, 1) ;"
    }if(character.maxLevel == 12){
      detailsC.style.cssText ="box-shadow: 0 0 90px rgba(253, 101, 0, 1) ;"
    }if(character.maxLevel == 9){
      detailsC.style.cssText ="box-shadow: 0 0 90px rgb(202, 1, 254, 1) ;"
    }if(character.maxLevel == 6){
      detailsC.style.cssText ="box-shadow: 0 0 90px rgb(246, 246, 246, 1) ;"
    }if(character.maxLevel == 4){
      detailsC.style.cssText ="box-shadow: 0 0 90px rgba(249, 226, 94, 1) ;"
    }}
    sobreado(character)

  const arr = character.counter
    .map((elem) => {
      const arr2 = data.filter((item) => elem === item.name)
      return arr2
    })
    .flat()
  arr.forEach((obj) => {
    const counters = document.querySelector('.counters')
    counters.innerHTML += counterComp(obj.iconUrls.medium, obj.name, obj.id)
  })
  counterEvent()
}

// print all character
const printCards = (cards) => {
  cards.forEach((card) => {
    const cartaCreate = cardComponent(card)
    cardsContainer.innerHTML += cartaCreate
  })
}

// init app
const header = document.querySelector('header')
const cardsContainer = document.querySelector('#wall')
const init = async () => {
  header.innerHTML = headerComponent
  const data = await fetchData()
  printHero(data, 'Baby Dragon')
  printCards(data)
  addEvents()
}

init()
