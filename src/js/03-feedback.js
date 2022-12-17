import debounce from "lodash.debounce";

const form = document.querySelector('.feedback-form');
// const submitButton = form.querySelector('button');

form.addEventListener('input', debounce(onInput, 500));
form.addEventListener('submit', onClick);

function onInput(evt){
    console.log(evt.target.value);
};

function onClick(evt) {
    evt.preventDefault();
    const {elements: {email, message}} = evt.target;
    console.log(email.value, message.value);
}