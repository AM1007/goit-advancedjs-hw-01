import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

/**
 *Saving data to Local Storage
 * @param {*} key
 * @param {*} value
 */
const save = function (key, value) {
  try {
    const strigifiedData = JSON.stringify(value);
    localStorage.setItem(key, strigifiedData);
  } catch (error) {
    console.log('Set state error: ', error.message);
  }
};

/**
 * Loading data from Local Storage
 * @param {*} key
 * @returns
 */
const load = function (key) {
  try {
    const strigifiedData = localStorage.getItem(key);
    return strigifiedData === null ? undefined : JSON.parse(strigifiedData);
  } catch (error) {
    console.log('Get state error: ', error.message);
  }
};

/**
 * Removing data from Local Storage
 * @param {*} key
 */
const remove = function (key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Get state error: ', error.message);
  }
};

/**
 * Operations with Input data
 * @param {*} evt
 */
const onFormInput = function (evt) {
  const { name, value } = evt.target;
  try {
    let saveData = load(LS_KEY);
    saveData = saveData ? saveData : {};
    saveData[name] = value;
    save(LS_KEY, saveData);
  } catch (error) {
    console.log(error);
  }
};

const throttledOnFormInput = throttle(onFormInput, 500);
form.addEventListener('input', throttledOnFormInput);

initPage();
/**
 *Loading form data from Local Storage and fill them into the form
 * @returns
 */
function initPage() {
  const saveData = load(LS_KEY);
  if (!saveData) {
    return;
  }
  Object.entries(saveData).forEach(([name, value]) => {
    form.elements[name].value = value;
  });
}

/**
 * Retrieve and delete data from form fields, output to console, reset form,
 * @param {*} evt
 */
const handleSubmit = function (evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset();
  remove(LS_KEY);
};

form.addEventListener('submit', handleSubmit);
