let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit');
let button = document.querySelector('.popup__submit');
let nameTitle = document.querySelector('.profile__title');
let nameParagraf = document.querySelector('.profile__paragraf');
let form = document.querySelector('.popup__text');
let formInput = document.querySelector('.popup__paragrah_type_name');
let formactiviti = document.querySelector('.popup__paragrah_type_activ');
let inputCard = document.queryCommandIndeterm('.popup__paragrah_type_card');




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


let inputCardlink = document.querySelector('.popup__paragrah_type_card-link');
let openCardpopup = document.querySelector('.profile__add');
let popupCard = document.querySelector('.popup_card');
let closeIconButton = document.querySelector('.popup__close_card');
let buttonCard = document.querySelector ('.element__button-card');
let popupModal = document.querySelector('.popup__modal');
let closeImg = document.querySelector('.popup__close_img');
let modalImg = document.querySelector('.element__group-img');
let textImg = document.querySelector('.text__img');
let textTitle = document.querySelector('.popup__title')
let popupImageItem = document.querySelector('.popup__group-item');
let elements = document.querySelector('.elements');
let elementClone = document.querySelector('.element').content;
let article = document.querySelector('.element__template');


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

function render () {
  initialCards.forEach(createCard);
}
function renderCards (element) {                                       //Добавление эл-ов на стр. при загрузке
  const cardElement = elementClone.cloneNode(true);                        
  cardElement.querySelector('.element__paragraf').textContent = element.name;
  cardElement.querySelector('.element__group').src = element.link;
  cardElement.querySelector('.element__group').alt = element.name;
  cardElement.querySelector('.element__group-card').addEventListener('click', function(event){
    popupModal.classList.toggle('popup__opened');
    popupImageItem.src = element.link;
    textImg.textContent = element.name;
    popupImageItem.alt = element.name;
  });

  addListeners(cardElement);
  sectionElements.append(cardElement);
}
// создание новой карточки

function LikeToButton (button) {
  button.target.classList.toggle('element__vector_active');
}
function DeletoButton (button){
  button.target.closest('.element__vector');
}

 function openPopupCard(){
  popupCard.classList.toggle('popup_opened');// открытие popup (+)
}
function closePopupCard(){
  popupCard.classList.toggle('popup_opened'); //закрытие popup (+)
}




openCardpopup.addEventListener ('click', openPopupCard); //openCardpopup-здесь задаем элемент на который нажимаем и появляется popup
closeIconButton.addEventListener('click', closePopupCard);


