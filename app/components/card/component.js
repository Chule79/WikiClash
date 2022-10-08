import './style.css'

export const cardComponent = (card) => {
  return `
    <div data-number=${card.id} class="cromo" id="cromo" style='background-image: url(${card.iconUrls.medium})'>
        <h2>${card.name}</h2>
    </div>
    `
}
