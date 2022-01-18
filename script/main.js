let popupOpen = document.querySelector('.profile__edit'),
    popupClose = document.querySelector('.popup__close'),
    button = document.querySelector('.popup__submit'),
    popup = document.querySelector('.popup');

     popupOpen.onclick = function(){
         popup.classList.add('popup_opened'); //открытие popup
     }
     popupClose.onclick = function(){
        popup.classList.remove('popup_opened'); // закрытие popup
    }
     let nameTitle = document.querySelector('.profile__title'),
         nameParagraf = document.querySelector('.profile__paragraf'),
         form = document.querySelector('.popup__text'),
        formInput = document.querySelector('.popup__paragrah'),
        formactiviti = document.querySelector('.popup__paragrah-activ');
 function click (e) {
    e.preventDefault();
    let nameValue = formInput.value;
    let activitiValue = formactiviti.value;
    nameTitle.textContent = nameValue;
    nameParagraf.textContent = activitiValue;
 }

 form.addEventListener('submit', click);



