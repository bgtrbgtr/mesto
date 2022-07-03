
const showInputError = (form, input, errorMessage, config) => {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(config.errorVisibleClass);
};

const hideInputError = (form, input, config) => {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorVisibleClass);
  error.textContent = "";
};

const isValid = (form, input, config) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, config);
  } else {
    hideInputError(form, input, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  })
};

const toggleButtonState = (inputList, button) => {
  if (hasInvalidInput(inputList)) {
    button.setAttribute("disabled", "disabled");
  } else {
    button.removeAttribute("disabled");
  }
}

const setEventListener = (form, config) => {
  const fieldList = Array.from(form.querySelectorAll(config.inputSelector));
  const button = form.querySelector(config.submitButtonSelector);
    toggleButtonState(fieldList, button);
    fieldList.forEach((input) => {
      input.addEventListener('input', () => {
        isValid(form, input, config);

        toggleButtonState(fieldList, button);
      })
    })
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    setEventListener(form, config);
  })
}

const resetForm = (form, config) => {
  const fieldList = Array.from(form.querySelectorAll(config.inputSelector));
  const button = form.querySelector(config.submitButtonSelector);
  toggleButtonState(fieldList, button);
}
