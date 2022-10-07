import './style.css'

import { navi2 } from './components/nav-component/nav-comp.js'
import { hero } from './components/hero/component.js'
import { cardComponent } from './components/card/component'
import logo from './assets/logo.png'
import fire from './assets/fire.png'

const header = document.querySelector('header')
const wall = document.querySelector('#wall')
const details = document.querySelector('#details')

const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/items')
    const transformData = await response.json()
    mapData(transformData)
  } catch (error) {
    console.log(error)
  }
}

const mapData = (cards) => {
  let elementsCard = cards.map((card) => {
    return {
      name: card.name,
      levelMax: card.maxLevel,
      imagen: card.iconUrls.medium,
    }
  })
  drawCard(elementsCard)
}

const drawCard = (cards) => {
  console.log(cards)
  cards.forEach((card) => {
    const cartaCreate = cardComponent(card.name, card.imagen)
    wall.innerHTML += cartaCreate
  })
}

getData()

//header.innerHTML = navi;
header.innerHTML = navi2
details.innerHTML = hero('knight', 14, 'ground', logo, fire)
