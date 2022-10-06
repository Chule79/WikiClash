import './style.css'
import './css/style_carta.css'
import {cartaConstr} from "./componentes/Cart-Component/cart-component.js"
import {navi} from "./componentes/nav-component/nav-comp.js";
import {navi2} from "./componentes/nav-component/nav-comp.js";
import {hero} from "./componentes/hero/component.js"


const header = document.querySelector('header')
const wall = document.querySelector("#wall")
const details = document.querySelector('#details')

const getData = async () => {
  try {
    const response = await fetch ("http://localhost:3000/items");
    const transformData = await response.json();
    mapData(transformData); 
  } catch (error) {
    console.log(error);
  }
  
} 



const mapData = (cards) => {
  let elementsCard = cards.map((card) => {
    return {
      name: card.name,
      levelMax: card.maxLevel,
      imagen: card.iconUrls.medium
    }
  })
  
  drawCard(elementsCard)
}

const drawCard = (cards) => {
  cards.forEach(card => {
    const cartaCreate = `
    <div class="cromo" style='background-image: url(${card.imagen})'>
        <h2>${card.name}</h2>
    </div>
    `;
    wall.innerHTML += cartaCreate;
  });
}



getData()

//header.innerHTML = navi;
header.innerHTML = navi2;
details.innerHTML = hero;