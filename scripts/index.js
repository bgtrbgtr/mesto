const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popup = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const closePopupButton = document.querySelectorAll('.popup__close-button');
const editFormElement = document.querySelector('.popup__form_type_edit-profile');
const nameInput = editFormElement.querySelector('.popup__field_type_name');
const jobInput = editFormElement.querySelector('.popup__field_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const addCardFormElement = document.querySelector('.popup__form_type_add-card');
const placeName = addCardFormElement.querySelector('.popup__field_type_name');
const placeImageUrl = addCardFormElement.querySelector('.popup__field_type_job');

const cardTemplate = document.querySelector('#card').content;
const elementsSection = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Эльбрус',
    link: 'images/elbrus-element.jpeg'
  },
  {
    name: 'Нижний Новгород',
    link: 'images/nizhniy-novgorod-element.jpeg'
  },
  {
    name: 'Калуга',
    link: 'images/kaluga-element.jpeg'
  },
  {
    name: 'Омск',
    link: 'images/omsk-element.jpeg'
  },
  {
    name: 'Оймякон',
    link: 'images/oymakon-element.jpeg'
  },
  {
    name: 'Сочи',
    link: 'images/sochi-element.jpeg'
  },
]

function likeAction(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

function addCard(card) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').style = `background: url(${card.link}) center / cover`;
  cardElement.querySelector('.element__caption').textContent = card.name;
  cardElement.querySelector('.element__like-button').addEventListener('click', likeAction);

  elementsSection.insertBefore(cardElement, elementsSection.firstChild);
}

initialCards.forEach(addCard);

function popupEditProfileOpen() {
  if (!popupEditProfile.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }

  popupEditProfile.classList.add('popup_opened');
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popupClose();
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  let card = {};
  card.name = placeName.value;
  card.link = placeImageUrl.value;
  addCard(card);

  popupClose();
}

function popupAddCardOpen() {
  popupAddCard.classList.add('popup_opened');
}

function popupClose(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}

editFormElement.addEventListener('submit', editFormSubmitHandler);
addCardFormElement.addEventListener('submit', addFormSubmitHandler);
editButton.addEventListener('click', popupEditProfileOpen);
addButton.addEventListener('click', popupAddCardOpen);

closePopupButton.forEach((i) => i.addEventListener('click', popupClose));
