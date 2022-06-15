const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');
const closePopupButtons = document.querySelectorAll('.popup__close-button');
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

const likeAction = (likeButton) => () => {
  likeButton.classList.toggle('element__like-button_active');
}

function deleteCard(evt) {
  evt.target.closest('.element').remove();
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

function openPopupImage(card) {
  openPopup(popupImage);
  const image = popupImage.querySelector('.popup__image');
  const caption = popupImage.querySelector('.popup__image-caption');
  caption.textContent = card.name;
  image.src = card.link;
}

function addCard(card) {
  elementsSection.prepend(card);
}

function createCard(card) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').style = `background: url(${card.link}) center / cover`;
  cardElement.querySelector('.element__caption').textContent = card.name;
  const likeButton = cardElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', likeAction(likeButton));
  cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  cardElement.querySelector('.element__image').addEventListener('click', () => openPopupImage(card));
  return cardElement;
}

initialCards.forEach((i) => addCard(createCard(i)));

function openPopupEditProfile() {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditProfile);
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const card = {};
  card.name = placeName.value;
  card.link = placeImageUrl.value;
  const newCard = createCard(card);
  addCard(newCard);
  closePopup(popupAddCard);
  addCardFormElement.reset();
}

function openPopupAddCard() {
  openPopup(popupAddCard);
}

function closePopupByButton(evt) {
  popupOpened = evt.target.closest('.popup');
  closePopup(popupOpened);
}

editFormElement.addEventListener('submit', editFormSubmitHandler);
addCardFormElement.addEventListener('submit', addFormSubmitHandler);
editButton.addEventListener('click', openPopupEditProfile);
addButton.addEventListener('click', openPopupAddCard);
closePopupButtons.forEach((i) => i.addEventListener('click', closePopupByButton));
