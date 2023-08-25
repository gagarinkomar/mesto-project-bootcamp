import {
    buttonAdd,
    buttonEdit,
    cards,
    formData,
    imageAdd, inputDescription,
    inputLink,
    inputName,
    inputPlace,
    popupProfile, profileDescription, profileName,
    template
} from "./utils";
import {openPopup, openPopupImage} from "./modal";

export const initialCards = [
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


export function createCard(name, link) {
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

buttonEdit.addEventListener("click", function () {
    clearInput(popupProfile, formData.errorClass, formData.inputErrorClass);
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
    openPopup(popupProfile);
});

