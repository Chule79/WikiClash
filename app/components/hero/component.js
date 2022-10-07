import { printCharacter } from '../../main'
import './style.css'

export const hero = (name, level, type, img, i1, i2, i3) => {
  const heroComponent = `
    <div class='hero-container'>
        <img class='character-img' src='${img}' alt=''>
        <div class='details'>
            <p>Name: ${name}</p>
            <p>Max level: ${level}</p>
            <p>Type: ${type}</p>
            <divclass='counters-container'>
                <p class='counters-text'>Counters:</p>
                <div class='counters'>
                    <img src='${i1}' alt=''>
                    <img src='${i2}' alt=''>
                    <img src='${i3}' alt=''>
                </div>
            </div>
        </div>
    </div>
    `

  return heroComponent
}
