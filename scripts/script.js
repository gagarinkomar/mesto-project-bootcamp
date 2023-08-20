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

const page = document.querySelector(".page");

const profile = document.querySelector(".profile");
const popupProfile = document.querySelector(".popup_profile");
const inputName = popupProfile.querySelector(".popup__input_field_name");
const inputDescription = popupProfile.querySelector(".popup__input_field_description");
const buttonEdit = profile.querySelector(".profile__button-edit");
buttonEdit.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  openPopup(popupProfile);
});

const profileName = profile.querySelector(".profile__name");
const profileDescription = profile.querySelector(".profile__description");
const formSend = popupProfile.querySelector(".popup__container");
formSend.addEventListener("submit", function (e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closePopup(popupProfile);
});

function createCard(name, link) {
  const cardNew = template.querySelector(".card").cloneNode(true);
  const cardNewImage = cardNew.querySelector(".card__image");
  const cardNewLike = cardNew.querySelector(".card__like");
  cardNewImage.src = `${link}`;
  cardNewImage.alt = `${name}`;
  cardNew.querySelector(".card__place").textContent = `${name}`;
  cardNew.querySelector(".card__trash").addEventListener("click", (e) => cardNew.remove());
  cardNewLike.addEventListener("click", (e) => e.target.classList.toggle("card__like_active"));
  return cardNew;
}

const template = document.querySelector("#card").content;
const cards = document.querySelector(".cards");
function collectCards(arr) {
  arr.forEach(function (el) {
    cards.append(createCard(el.name, el.link));
  });
}
collectCards(initialCards);

const buttonAdd = profile.querySelector(".profile__button-add");
const imageAdd = page.querySelector(".popup_image_add");
const inputPlace = imageAdd.querySelector(".popup__input_field_place");
const inputLink = imageAdd.querySelector(".popup__input_field_link");
buttonAdd.addEventListener("click", function () {
  inputPlace.placeholder = "Название";
  inputLink.placeholder = "Ссылка на картинку";
  openPopup(imageAdd);
});

const formAdd = imageAdd.querySelector(".popup__container");
formAdd.addEventListener("submit", function (e) {
  e.preventDefault();
  cards.prepend(createCard(inputPlace.value, inputLink.value));
  initialCards.unshift({ name: inputPlace.value, link: inputLink.value });
  closePopup(imageAdd);
  inputPlace.value = ""; inputLink.value = "";
});

page.addEventListener("click", function (e) {
  if (e.target.classList.contains("popup__close")) {closePopup(e.target.closest(".popup"));}
});

function openPopup(el) { el.classList.add("popup_opened"); }
function closePopup(el) { el.classList.remove("popup_opened"); }
