import debounce from 'lodash.debounce';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', debounce(onInput, 500));


const LOCALSTORAGE_KEY = 'feedback-form-state';

populateForm();

function onInput() {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const formDataObject = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
  console.log(formDataObject);

  evt.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const formDataObject = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

    textarea.value = formDataObject.message || '';
    input.value = formDataObject.email || '';
  }
}
