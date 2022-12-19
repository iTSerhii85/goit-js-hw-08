// ! Вариант 1
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

// ! Вариант 2

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-msg';

// let formData = {};

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   input: document.querySelector('.feedback-form input'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onChange, 1000));

// populateTextarea();

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   console.log(formData);
//   if (!formData.message || !formData.email) {
//     alert('Fill all fields');
//     return;
//   }
//   formData = {};
//   evt.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onChange(evt) {
//   formData[evt.target.name] = evt.target.value;
//   const formDataJson = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, formDataJson);
// }

// function populateTextarea() {
//   formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
//   if (formData) {
//     refs.input.value = formData.email || '';
//     refs.textarea.value = formData.message || '';
//   }
// }
