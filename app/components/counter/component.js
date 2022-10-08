import './style.css'

export const counterComp = (url, title, id) => {
  return `
        <image data-number=${id} class="counter" id="counter" src="${url}" alt="${title}"></image>
    `
}
