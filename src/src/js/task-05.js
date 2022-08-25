const input = document.querySelector('#name-input');
const label = document.querySelector('#name-output');
input.addEventListener('input', newInput);
function newInput(out) {
    label.textContent = out.currentTarget.value;
    if (a.currentTarget.value === " ") {
        title.textContent = "Anonymous"
    }
}
