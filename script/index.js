let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit');
let button = document.querySelector('.popup__submit');
let nameTitle = document.querySelector('.profile__title');
let nameParagraf = document.querySelector('.profile__paragraf');
let form = document.querySelector('.popup__text');
let formInput = document.querySelector('.popup__paragrah');
let formactiviti = document.querySelector('.popup__paragrah-activ');


      function OpenButton() {
        popup.classList.add('popup_opened');
        formInput.value = nameTitle.textContent;
        formactiviti.value = nameParagraf.textContent; // открытие popup
     }

     function CloseButton() {
        popup.classList.remove('popup_opened'); // закрытие popup
    }
    
 function click (e) {
    e.preventDefault();
    let nameValue = formInput.value;
    let activitiValue = formactiviti.value;
    nameTitle.textContent = nameValue;
    nameParagraf.textContent = activitiValue;
    CloseButton();
 }

popupOpen.addEventListener('click', OpenButton);
popupClose.addEventListener('click', CloseButton);
form.addEventListener('submit', click);


