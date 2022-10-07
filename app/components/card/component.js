import './style.css'

export const cardComponent = (name, image) => {
  return `
    <div class="cromo" style='background-image: url(${image})'>
        <h2>${name}</h2>
    </div>
    `
}
