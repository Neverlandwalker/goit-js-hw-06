const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text")

inputEl.addEventListener("input", fontChangeSize);

function fontChangeSize() {
    spanEl.style.fontSize = `${inputEl.value}px`
}