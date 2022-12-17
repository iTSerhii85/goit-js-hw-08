import debounce from 'lodash.debounce';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', debounce(onInput, 1000));

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

populateForm();

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const savedFormParams = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsFormParams = JSON.parse(savedFormParams);

  console.log(parsFormParams);
  evt.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
  const savedFormParams = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsFormParams = JSON.parse(savedFormParams);

  if (parsFormParams) {
    input.value = parsFormParams.email;
    textarea.value = parsFormParams.message;
  }
}
