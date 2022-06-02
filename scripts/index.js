const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__field_type_name');
const jobInput = formElement.querySelector('.popup__field_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


function popupDisplaySwitcher () {
  if (popup.classList.contains('popup_opened') === false) {
    popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  } else {
    popup.classList.toggle('popup_opened');
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popupDisplaySwitcher();
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', popupDisplaySwitcher);
closePopupButton.addEventListener('click', popupDisplaySwitcher);
