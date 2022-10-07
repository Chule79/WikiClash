import './style.css'
import {getData} from './services/api.js'
import { navi2 } from './components/nav-component/nav-comp.js'
import { hero } from './components/hero/component.js'
import { cardComponent } from './components/card/component.js'
import logo from './assets/logo.png'
import fire from './assets/fire.png'
import {addEvents} from './events/events.js'

const header = document.querySelector('header')
const wall = document.querySelector('#wall')
const details = document.querySelector('#details')


const fetchData = async () => {
  const data = await getData();
  mapData(data)
}


const mapData = (cards) => {
  let elementsCard = cards.map((card) => {
    return {
      id: card.id,
      name: card.name,
      tipo: card.type,
      levelMax: card.maxLevel,
      imagen: card.iconUrls.medium,
    }
  })
  drawCard(elementsCard)
}

const drawCard = (cards) => {
  cards.forEach((card) => {
    const cartaCreate = cardComponent(card.id, card.name, card.imagen)
    wall.innerHTML += cartaCreate
  })
  addEvents()
}

export const printCharacter = (character) => {
  const details = document.querySelector('#details');
  const hero = document.querySelector(".hero-container")
  console.log(hero)
  hero.remove()
   /* const {name, type, maxLevel, iconUrls} = character
    const img = iconUrls.medium
    console.log(character);
  details.innerHTML = hero(name, maxLevel, type, img)*/
  
}

fetchData()
//header.innerHTML = navi;
header.innerHTML = navi2
details.innerHTML = hero('knight', 14, 'ground', logo, fire)
