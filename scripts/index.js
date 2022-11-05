const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closePopupProfileButton = document.querySelector(".popup__close-button");
const saveProfileForm = document.forms["popup-profile"];
const inputName = document.querySelector(".popup__input_info_name");
const inputProfession = document.querySelector(".popup__input_info_about");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const popupProfile = document.querySelector(".popup-profile");
const popupCard = document.querySelector(".popup-card");
const closePopupCardButton = document.querySelector(".popup-card__close-button");
const saveCardForm = document.forms["popup-card"];
const imagePopup = document.querySelector('.popup-image');
const imagePopupPic = document.querySelector('.popup-image__picture');
const imagePopupTitle = document.querySelector('.popup-image__title');
const popupImageCloseButton = document.querySelector('#popup__close-button');
const inputCardName = document.querySelector("#popup__input_card_name");
const inputCardLink = document.querySelector("#popup__input_card_link");
const cardSection = document.querySelector(".elements");
const initialCards = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Водопад Виктория',
    link: 'https://ic.pics.livejournal.com/e_kaspersky/24977487/8462483/8462483_original.jpg'
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
];

//универсальная функция открытия попапов
function openPopup(popup){
  popup.classList.add("popup_opened");
}
//универсальная функция закрытия попапов
function closePopup(popup){
  popup.classList.remove("popup_opened");
}

//заполняет инпуты попапа с  информацией о пользователе данными, существующими в профиле
function saveProfileInfo() {
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}
//заполняет данные профиля новыми - введенными в инпуты попапа с  информацией о пользователе
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup(popupProfile);
}
//добавляет изначальные карточки в профиль 
function addInitialCards(){
  initialCards.forEach(function(el){
    addCard(el.name, el.link);
  })
}

//создает темплейт-карточку со всеми элементами и обработчиками событий этих элементов
//лайки при нажатии
//удаление при нажатии
//открытие попапа с изображением и заголовком при нажатии
function createCard(cardName, cardLink){
  const cardTemplate = document.querySelector("#element-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  cardElement.querySelector(".element__title").textContent = cardName;
  elementImage.src = cardLink;
  elementImage.alt = cardName;
  const deleteButton = cardElement.querySelector('.element__image-delete');
  deleteButton.addEventListener('click', function(){
    cardElement.remove();
  })
  const likeButton = cardElement.querySelector('.element__like');
  likeButton.addEventListener('click', function(){
    likeButton.classList.toggle('element__like_active');
  })
  elementImage.addEventListener('click', function(){
    imagePopupPic.src = elementImage.src;  
    imagePopupTitle.textContent = cardElement.textContent;
    imagePopupPic.alt = cardElement.textContent;  
    openPopup(imagePopup)
  })
  return cardElement
}

//добавляет созданную карточку в начало
function addCard(cardName, cardLink) {
  const cardElement = createCard(cardName, cardLink);
  cardSection.prepend(cardElement);
}

function submitNewCard(){
  addCard(inputCardName.value, inputCardLink.value);
  inputCardName.value = '';
  inputCardLink.value = '';
  closePopup(popupCard);
}

addInitialCards();

editButton.addEventListener("click", function(){openPopup(popupProfile), saveProfileInfo()});

closePopupProfileButton.addEventListener("click", function(){closePopup(popupProfile)});

saveProfileForm.addEventListener("submit", handleProfileFormSubmit);

addButton.addEventListener("click", function(){openPopup(popupCard)});

closePopupCardButton.addEventListener("click", function(){closePopup(popupCard)});

popupImageCloseButton.addEventListener('click', function(){closePopup(imagePopup)});

saveCardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  submitNewCard();
});