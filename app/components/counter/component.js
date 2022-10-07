import "./style.css";



export const counterComp = (url, title ) => {
    return `
        <image class="counter" id="counter" src="${url}" alt="${title}"></image>
    `
}