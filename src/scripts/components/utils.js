

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


export { page, profile, popupProfile, formAddProfile, inputName, inputDescription, profileName, profileDescription,
    formUserProfile, imageAdd, formAdd, inputPlace, inputLink, buttonEdit, buttonAdd, popupImageDisplay, popupImageDisplayFull, template,
    popupImageDisplayCaption, cards}