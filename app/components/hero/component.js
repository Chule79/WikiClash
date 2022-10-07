import { printCharacter } from '../../main'
import './style.css'

export const hero = (character) => {
  const heroComponent = `
    <div class='hero-container'>
        <img class='character-img' src='${character.iconUrls.medium}' alt=''>
        <div class='details'>
            <p>Name: ${character.name}</p>
            <p>Max level: ${character.maxLevel}</p>
            <p>Type: ${character.type}</p>
            <divclass='counters-container'>
                <p class='counters-text'>Counters:</p>
                <div class='counters' id="counterContainer">
                    
                </div>
            </div>
        </div>
    </div>
    `

  return heroComponent
}
