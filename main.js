import './style.css'
import {cartaConstr} from "./componentes/Cart-Component/cart-component.js"
const wall = document.querySelector("#wall")


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
    <div>
        <div>
            <img src="${card.imagen}"></img>
        </div>
        <h2>${card.name}</h2>
        <p>Nivael maximo alcanzable ${card.levelMax}</p>
    </div>
`;
    wall.innerHTML += cartaCreate;
  });
}



getData()