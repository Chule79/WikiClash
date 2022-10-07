import './style.css'
import { getData } from './services/api.js'
import { navi2 } from './components/nav-component/nav-comp.js'
import { hero } from './components/hero/component.js'
import { cardComponent } from './components/card/component.js'
import logo from './assets/logo.png'
import fire from './assets/fire.png'
import { addEvents } from './events/events.js'

const header = document.querySelector('header')
const wall = document.querySelector('#wall')
const details = document.querySelector('#details')

const fetchData = async () => {
  const data = await getData()
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

export const printCharacter = (character, data) => {
  console.log(data)
  const details = document.querySelector('#details')
  const heroCont = document.querySelector('.hero-container')
  heroCont.remove()
  const { name, type, maxLevel, iconUrls, counter } = character
  const img = iconUrls.medium
  console.log(character);
  const counters = counter
    .map((item) => {
      return data.filter((el) => el.name === item)
    })
    .flat()
  const counterImgs = counters.map((item) => item.iconUrls.medium)
  const [img1, img2, img3] = counterImgs
  const newHero = hero(name, maxLevel, type, img, img1, img2, img3)
  details.innerHTML += newHero
}

fetchData()
//header.innerHTML = navi;
header.innerHTML = navi2
details.innerHTML = hero(   {
  "name": "Electro Spirit",
  "id": 26000084,
  "maxLevel": 14,
  "iconUrls": {
    "medium": "https://api-assets.clashroyale.com/cards/300/WKd4-IAFsgPpMo7dDi9sujmYjRhOMEWiE07OUJpvD9g.png"
  },
  "type": "ground",
  "counter": ["Minions", "Balloon", "Mother Witch"]
},)
