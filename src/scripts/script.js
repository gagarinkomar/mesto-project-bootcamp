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

const formData = {
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const page = document.querySelector(".page");
const profile = document.querySelector(".profile");

const popupProfile = document.querySelector(".popup_profile");
const formAddProfile = popupProfile.querySelector(".popup__container");
const inputName = popupProfile.querySelector(".popup__input_field_name");
const inputDescription = popupProfile.querySelector(
  ".popup__input_field_description"
);
const profileName = profile.querySelector(".profile__name");
const profileDescription = profile.querySelector(".profile__description");
const formUserProfile = popupProfile.querySelector(".popup__container");

const imageAdd = page.querySelector(".popup_image_add");
const formAdd = imageAdd.querySelector(".popup__container");
const inputPlace = imageAdd.querySelector(".popup__input_field_place");
const inputLink = imageAdd.querySelector(".popup__input_field_link");

const buttonEdit = profile.querySelector(".profile__button-edit");
const buttonAdd = profile.querySelector(".profile__button-add");

const popupImageDisplay = document.querySelector(".popup_picture");
const popupImageDisplayFull = popupImageDisplay.querySelector(".popup__full");
const popupImageDisplayCaption =
  popupImageDisplay.querySelector(".popup__caption");

const template = document.querySelector("#card").content;
const cards = document.querySelector(".cards");

buttonEdit.addEventListener("click", function () {
  clearInput(popupProfile, formData.errorClass, formData.inputErrorClass);
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  openPopup(popupProfile);
});

function savePopupProfile() {
  formUserProfile.addEventListener("submit", function (e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup(popupProfile);
    addButtonInactive(formAddProfile);
  });
}
savePopupProfile();

function createCard(name, link) {
  const cardNew = template.querySelector(".card").cloneNode(true);
  const cardNewImage = cardNew.querySelector(".card__image");
  const cardNewLike = cardNew.querySelector(".card__like");
  cardNewImage.src = `${link}`;
  cardNewImage.alt = `${name}`;

  cardNew.querySelector(".card__place").textContent = `${name}`;
  cardNew
    .querySelector(".card__trash")
    .addEventListener("click", () => cardNew.remove());
  cardNewLike.addEventListener("click", (e) =>
    e.target.classList.toggle("card__like_active")
  );
  cardNewImage.addEventListener("click", (e) => openPopupImage(e));
  return cardNew;
}

function openPopupImage(e) {
  popupImageDisplayFull.src = e.target.src;
  popupImageDisplayFull.alt = e.target.alt;
  popupImageDisplayCaption.textContent = e.target.alt;
  openPopup(popupImageDisplay);
}

function collectCards(arr) {
  arr.forEach(function (el) {
    cards.append(createCard(el.name, el.link));
  });
}
collectCards(initialCards);

buttonAdd.addEventListener("click", function (e) {
  inputPlace.value = "";
  inputLink.value = "";
  openPopup(imageAdd);
  clearInput(imageAdd, formData.errorClass, formData.inputErrorClass);
});

function savePopupImage() {
  formAdd.addEventListener("submit", function (e) {
    e.preventDefault();
    closePopup(imageAdd);
    cards.prepend(createCard(inputPlace.value, inputLink.value));
    inputPlace.value = "";
    inputLink.value = "";
    addButtonInactive(formAdd);
  });
}
savePopupImage();

function setCloseByClickButtonXListener(el) {
  el.addEventListener("mousedown", runXListener);
}
function runXListener(event) {
  if (event.target.classList.contains("popup__close")) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function setCloseByClickOverlayListener(el) {
  el.addEventListener("mousedown", runOverlayListener);
}
function runOverlayListener(event) {
  if (event.target.classList.contains("popup_opened")) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function openPopup(el) {
  el.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
  setCloseByClickButtonXListener(el);
  setCloseByClickOverlayListener(el);
}
function closePopup(el) {
  document.removeEventListener("keydown", closeByEsc);
  el.removeEventListener("mousedown", runXListener);
  el.removeEventListener("mousedown", runOverlayListener);
  el.classList.remove("popup_opened");
}


function clearInput(elPopup, errorClass, inputErrorClass) {
  const errorInputLine = Array.from(
    elPopup.getElementsByClassName(inputErrorClass)
  );

  errorInputLine.forEach((el) => {
    el.form.reset();
    el.classList.remove(inputErrorClass);
  });

  const errorInputSubline = Array.from(
    elPopup.getElementsByClassName(errorClass)
  );
  errorInputSubline.forEach((el) => (el.textContent = ""));
}

function addButtonInactive(form) {
  const popupButtonSave = form.querySelector(".popup__button-save");
  popupButtonSave.classList.add("cursor_inert");
  popupButtonSave.disabled = true;
}
