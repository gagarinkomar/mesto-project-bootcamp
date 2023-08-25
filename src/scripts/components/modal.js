import {popupProfile, formAddProfile, inputName, inputDescription, profileName, profileDescription,
    formUserProfile, imageAdd, formAdd, inputPlace, inputLink, popupImageDisplay, popupImageDisplayFull,
    popupImageDisplayCaption, cards} from "./utils"
import {createCard} from "./card";

export function setCloseByClickButtonXListener(el) {
    el.addEventListener("mousedown", runXListener);
}
export function runXListener(event) {
    if (event.target.classList.contains("popup__close")) {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

export function setCloseByClickOverlayListener(el) {
    el.addEventListener("mousedown", runOverlayListener);
}
export function runOverlayListener(event) {
    if (event.target.classList.contains("popup_opened")) {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}
export function closeByEsc(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

export function openPopup(el) {
    el.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEsc);
    setCloseByClickButtonXListener(el);
    setCloseByClickOverlayListener(el);
}
export function closePopup(el) {
    document.removeEventListener("keydown", closeByEsc);
    el.removeEventListener("mousedown", runXListener);
    el.removeEventListener("mousedown", runOverlayListener);
    el.classList.remove("popup_opened");
}

export function savePopupProfile() {
    formUserProfile.addEventListener("submit", function (e) {
        e.preventDefault();
        profileName.textContent = inputName.value;
        profileDescription.textContent = inputDescription.value;
        closePopup(popupProfile);
        addButtonInactive(formAddProfile);
    });
}
savePopupProfile();

export function openPopupImage(e) {
    popupImageDisplayFull.src = e.target.src;
    popupImageDisplayFull.alt = e.target.alt;
    popupImageDisplayCaption.textContent = e.target.alt;
    openPopup(popupImageDisplay);
}

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

function addButtonInactive(form) {
    const popupButtonSave = form.querySelector(".popup__button-save");
    popupButtonSave.classList.add("cursor_inert");
    popupButtonSave.disabled = true;
}