let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit');
let button = document.querySelector('.popup__submit');
let nameTitle = document.querySelector('.profile__title');
let nameParagraf = document.querySelector('.profile__paragraf');
let form = document.querySelector('.popup__text');
let formInput = document.querySelector('.popup__paragrah_name');
let formactiviti = document.querySelector('.popup__paragrah_activ');


      function openButton() {
        formInput.value = nameTitle.textContent;
        formactiviti.value = nameParagraf.textContent;
        popup.classList.add('popup_opened'); // открытие popup
     }

     function closeButton() {
        popup.classList.remove('popup_opened'); // закрытие popup
    }
    
 function clickSaveinput (e) {
    e.preventDefault();
    let nameValue = formInput.value;
    let activitiValue = formactiviti.value;
    nameTitle.textContent = nameValue;
    nameParagraf.textContent = activitiValue;
    closeButton();
 }

popupOpen.addEventListener('click', openButton);
popupClose.addEventListener('click', closeButton);
form.addEventListener('submit', clickSaveinput);


