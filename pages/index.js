const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__field_type_name');
const jobInput = formElement.querySelector('.popup__field_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


function openPopup () {
  popup.classList.add('popup_opened');
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  let name = nameInput.value;
  let job = jobInput.value;

  if (name !== '') {
    profileName.textContent = nameInput.value;
  }

  if (job !== '') {
    profileJob.textContent = jobInput.value;
  }

  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
