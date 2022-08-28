const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
spanEl.style.fontSize = "56px";


inputEl.addEventListener("input", fontChangeSize);

function fontChangeSize() {
    spanEl.style.fontSize = `${inputEl.value}px`
}