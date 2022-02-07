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

const inputCardlink = document.querySelector('.popup__paragrah_type_card-link');
const openCardpopup = document.querySelector('.profile__add');
const popupCard = document.querySelector('.popup_card');
const closeIconButton = document.querySelector('.popup__close_card');
const buttonCard = document.querySelector ('.element__button-card');
const popupModal = document.querySelector('.popup__modal');
const closeImg = document.querySelector('.popup__close_img');
const modalImg = document.querySelectorAll('.element__group-img');
const textImg = document.querySelector('.text__img');
const textTitle = document.querySelector('.popup__title')
const popupImageItem = document.querySelector('.popup__group-item');
const elements = document.querySelector('.elements');
const elementClone = document.querySelector('.element');
const article = document.querySelector('.element__template');
const templateClone = document.querySelectorAll('.template').content;
const elmentIkon = document.querySelectorAll('.element__vector');
const delImg = document.querySelector('.element__card-del');
const popupImg = document.querySelector('.popup__group-item');
const elemenCardImg = document.querySelector('.element__group');



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


///////////5 проектная работа/////

function renderCards(element) {                                       
  const cardElement = templateClone.cloneNode(true);                        
  cardElement.querySelectorAll('.element__paragraf').textContent = element.name;
  cardElement.querySelectorAll('.element__group').src = element.link;
  cardElement.querySelectorAll('.element__group').alt = element.name;
  addListeners(cardElement);
  return cardElement;
  }

  function renderCard(card, wrap) {                
    wrap.prepend(card);
  } 

function render() {
  initialCards.reverse().forEach(function(element){
    const newCard = renderCards(element);
    renderCard(newCard, elements);
  });
}

function LikeToButton (event) {
  event.target.classList.toggle('element__vector_active'); // активна форма лайка
}
function DeletoImg (event) {
  event.target.closest('.element').remove(); 
}

elmentIkon.forEach(function (element){
  element.addEventListener('click', LikeToButton); //лайк сердечка
});


modalImg.forEach(function (element){
  element.addEventListener('click', openImgpopup);
});

function openImgpopup(e){                                  //открытие картинки
  popupModal.classList.toggle('popup__open-img');
  popupImg.src = e.target.srs;
  popupImg.alt = e.target.alt;
  textImg.textContent = e.target.alt;
}

function addCard (evt) {
  evt.preventDefault();
  const newItem = {
    name:inputCard.value,
    link:formactiviti.value
  };
  const newItemCard = renderCards(newItem)
  renderCard(newItemCard,elements);
  closeButton(popupCard);
}




function closePopupImg(){
  popupModal.classList.toggle('popup__open-img');
}
 function openPopupCard(){
  popupCard.classList.toggle('popup_opened');// открытие popup (+)
}


function closePopupCard(){
  popupCard.classList.toggle('popup_opened'); //закрытие popup (+)
}



closeImg.addEventListener('click', closePopupImg);
delImg.addEventListener('click', DeletoImg); // удаление карточки 

openCardpopup.addEventListener ('click', openPopupCard); //openCardpopup-здесь задаем элемент на который нажимаем и появляется popup
closeIconButton.addEventListener('click', closePopupCard);

render();

