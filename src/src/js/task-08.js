
const refs = {
    input: document.querySelector('.email'),
    password: document.querySelector('.password'),
    form: document.querySelector('.login-form')
}
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email;
    const password = formElements.password;

    if (email.value === "" || password.value === "") {
        return alert("Заповніть форму!")
    }
    console.log('email :', email.value);
    console.log('password :', password.value)
    refs.form.reset();
}