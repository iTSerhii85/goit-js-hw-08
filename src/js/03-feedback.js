import debounce from 'lodash.debounce';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', debounce(onInput, 1000));

populateForm();

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
  const savedParams = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsParams = JSON.parse(savedParams);
  if (parsParams) {
    input.value = parsParams.email;
    textarea.value = parsParams.massage;
  }
}
