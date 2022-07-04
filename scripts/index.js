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
const popups = document.querySelectorAll('.popup');
const image = popupImage.querySelector('.popup__image');
const caption = popupImage.querySelector('.popup__image-caption');

const formConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit',
  inputErrorClass: 'popup__field_type_error',
  errorVisibleClass: 'popup__field-error_active',
};

const likeAction = (likeButton) => () => {
  likeButton.classList.toggle('element__like-button_active');
}

const deleteCard = (evt) => {
  evt.target.closest('.element').remove();
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

const openPopupImage = (card) => {
  openPopup(popupImage);
  caption.textContent = card.name;
  image.src = card.link;
  image.alt = `Фотография места: ${card.name}`;
}

const addCard = (card) => {
  elementsSection.prepend(card);
}

const createCard = (card) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardElementImg = cardElement.querySelector('.element__image');
  const likeButton = cardElement.querySelector('.element__like-button');
  cardElementImg.src = `${card.link}`;
  cardElementImg.alt = `Фотография места: ${card.name}`;
  cardElementImg.addEventListener('click', () => openPopupImage(card));
  cardElement.querySelector('.element__caption').textContent = card.name;
  cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  likeButton.addEventListener('click', likeAction(likeButton));
  return cardElement;
}

initialCards.forEach((i) => addCard(createCard(i)));

const openPopupEditProfile = () => {
  resetForm(editFormElement, formConfig);
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const editFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditProfile);
}

const addFormSubmitHandler = (evt) => {
  resetForm(addCardFormElement, formConfig);
  evt.preventDefault();
  const card = {};
  card.name = placeName.value;
  card.link = placeImageUrl.value;
  const newCard = createCard(card);
  addCard(newCard);
  closePopup(popupAddCard);
  addCardFormElement.reset();
}

const openPopupAddCard = () => {
  resetForm(addCardFormElement, formConfig);
  openPopup(popupAddCard);
}

const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

const closePopupByButton = (evt) => {
  popupOpened = evt.target.closest('.popup');
  closePopup(popupOpened);
}

const closePopupByClickOnOverlay = (evt) => {
  const popup = evt.target.closest('.popup');
  evt.target.classList.contains('popup') ? closePopup(popup) : null;
}

editFormElement.addEventListener('submit', editFormSubmitHandler);
addCardFormElement.addEventListener('submit', addFormSubmitHandler);
editButton.addEventListener('click', openPopupEditProfile);
addButton.addEventListener('click', openPopupAddCard);
closePopupButtons.forEach((i) => i.addEventListener('click', closePopupByButton));
popups.forEach((i) => i.addEventListener('click', closePopupByClickOnOverlay));


enableValidation(formConfig);
