const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closePopupProfileButton = document.querySelector(".popup__close-button");
const saveForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input_info_name");
const inputProfession = document.querySelector(".popup__input_info_about");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const popupProfile = document.querySelector(".popup");

//добавляет класс для открытия попапа с  информацией о пользователе
function openPopupProfile() {
  popupProfile.classList.add("popup_opened");
  saveProfileInfo();
}
//убирает класс для закрытия попапа с  информацией о пользователе
function closePopupProfile() {
  popupProfile.classList.remove("popup_opened");
}
//заполняет инпуты попапа с  информацией о пользователе данными существующими в профиле
function saveProfileInfo() {
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}
//заполняет данные профиля новыми - введенными в инпуты попапа с  информацией о пользователе
function submitForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopupProfile();
}

editButton.addEventListener("click", openPopupProfile);

closePopupProfileButton.addEventListener("click", closePopupProfile);

saveForm.addEventListener("submit", submitForm);

//начало 5 спринта

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//добавляет изначальные карточки в профиль 
function addInitialCards(){
  initialCards.forEach(function(el){
    addCard(el.name, el.link);
  })
}

addInitialCards();

const popupCard = document.querySelector("#popup-card");
const closePopupCardButton = document.querySelector(
  "#popup-card__close-button"
);

//добавляет класс, открывает окно добавления карточки
function openPopupCard() {
  popupCard.classList.add("popup_opened");
}

addButton.addEventListener("click", openPopupCard);

//убирает класс, закрывает окно добавления карточки
function closePopupCard() {
  popupCard.classList.remove("popup_opened");
}

closePopupCardButton.addEventListener("click", closePopupCard);


//удаляет карточки при клике на корзину
function removeCard(){
  const deleteButton = document.querySelectorAll('.element__image-delete');
  deleteButton.forEach(function (el){
    el.addEventListener('click', function(){
      const listItem = el.closest('.element');
      listItem.remove();
    });
  });
}

//ставит-убирает лайки
function likeCard(){
  const likeButtons = document.querySelector(".element__like");
  likeButtons.addEventListener('click', function(evt){
    evt.target.classList.toggle("element__like_active");
  })
}

//создаем темплейт и добавляет новую карточку с переданными значениями в начало 
function addCard(cardName, cardLink) {
  const cardSection = document.querySelector(".elements");
  const cardTemplate = document.querySelector("#element-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__title").textContent = cardName;
  cardElement.querySelector(".element__image").src = cardLink;
  cardSection.prepend(cardElement);
  likeCard();
  removeCard();
}

//сохранение карточки через сабмит попапа
const saveCardForm = document.querySelector("#popup-card__form");

function submitNewCard(){
  const inputCardName = document.querySelector("#popup__input_card_name");
  const inputCardLink = document.querySelector("#popup__input_card_link");
  addCard(inputCardName.value, inputCardLink.value);
  inputCardName.value = '';
  inputCardLink.value = '';
  closePopupCard();
}

saveCardForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  submitNewCard();
});

//открытие попапа с изображением
// function zoomImage (event) {
//   const currentElement = event.target.closest(selectors.cardElement);
//   const currentElementTitle = currentElement.querySelector(selectors.elementTitle);
//   const currentElementImage = currentElement.querySelector(selectors.elementImage);
//   imagePopupPic.src = currentElementImage.src;
//   imagePopupTitle.textContent = currentElementTitle.textContent;
//   imagePopupPic.alt = currentElementTitle.textContent;
//   openPopup(imagePopup);
// };