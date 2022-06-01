const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__field_type_name');
const jobInput = formElement.querySelector('.popup__field_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


function openClosePopup () {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  let name = nameInput.value;
  let job = jobInput.value;

  if (name !== '') {
    profileName.textContent = name;
  }

  if (job !== '') {
    profileJob.textContent = job;
  }

  openClosePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', openClosePopup);
closePopupButton.addEventListener('click', openClosePopup);
