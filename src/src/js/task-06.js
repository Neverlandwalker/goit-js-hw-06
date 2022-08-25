

const input = document.querySelector('#validation-input');
const inputLength = document.querySelector('#data-length')
input.addEventListener('input', validationChek);

function validationChek(event) {
    const onInput = event.currentTarget;
    const inputLength = onInput.dataset.length;

    if (onInput.value.length < inputLength) {
        onInput.classList.add('invalid')
    }
    else {
        onInput.classList.remove('invalid')
        onInput.classList.add('valid')
    }
}