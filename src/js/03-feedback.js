import throttle from 'lodash.throttle';

// get access to elements
const formEl = document.querySelector('form');
const submitBtnEl = document.querySelector('button');

// get form data from localStorage or init empty object
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

// set form values from localStorage data
formEl.email.value = formData.email || '';
formEl.message.value = formData.message || '';

// add event listeners to form
formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

// input event callback
function onInput(e) {
  e.preventDefault();

  formData.email = formEl.email.value;
  formData.message = formEl.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// submit event callback
function onSubmit(e) {
  e.preventDefault();

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formEl.reset();
};