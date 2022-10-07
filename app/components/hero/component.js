import './style.css'

export const hero = (name, level, type, img, counter) => {
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
                    <img src='' alt=''>
                    <img src='' alt=''>
                    <img src='' alt=''>
                </div>
            </div>
        </div>
    </div>
    `

  return heroComponent
}
