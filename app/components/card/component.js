import './style.css'

export const cardComponent = (id, name, image) => {
  return `
    <div class="cromo" id="${id}" style='background-image: url(${image})'>
        <h2>${name}</h2>
    </div>
    `
}
