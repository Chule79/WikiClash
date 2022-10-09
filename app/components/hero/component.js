/* import { printCharacter } from '../../main' */
import './style.css'

export const heroComponent = (character) => {
  const hero = `
    <div class='heroCont'>
        <img class='character-img' src='${character.iconUrls.medium}' alt=''>
        <div class='detailsC' id="detailsC">
            <p>Name: ${character.name}</p>
            <p>Max level: ${character.maxLevel}</p>
            <p>Type: ${character.type}</p>
            <div class='counters-container'>
                <p class='counters-text'>Counters:</p>
                <div class='counters' id="counters">
                    
                </div>
            </div>
        </div>
    </div>
    `

  return hero
}
