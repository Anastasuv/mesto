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








///////////5 проектная работа/////
const inputCardlink = document.querySelector('.popup__paragrah_type_card-link');
const buttonCard = document.querySelector ('.element__button-card');


const textTitle = document.querySelector('.popup__title')
const popupImageItem = document.querySelector('.popup__group-item');
const elements = document.querySelector('.elements');
const elementClone = document.querySelector('.element');
const article = document.querySelector('.element__template');

// Получение элемента-контейнера Div, внутри которого будет изображение в оригинале (класс для картинки: popup__open-img): 
const popupModal = document.querySelector('.popup__modal'); // form

const elmentIkon = document.querySelectorAll('.element__vector');
// const delImg = document.querySelector('.element__card-del');
const popupImg = document.querySelector('.popup__group-item');
const elemenCardImg = document.querySelector('.element__group');

// Массив карточек
let initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    like: false
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    like: false
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    like: false
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    like: false
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    like: false
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    like: false
  }
];


// Обработчик кнопки добавления новой карточки: 
function add_new_card() {
  let _name = document.querySelector('.popup__paragrah.popup__paragrah_type_card').value;
  console.log("name = " + _name);
  let _link = document.querySelector('.popup__paragrah.popup__paragrah_type_card-link').value;
  console.log("link = " + _link);
  let new_el = {
    name : _name,
    link : _link,
  };

  initialCards.push(new_el);
  inflateCard(new_el);
 

  // Закрыть форму добавления новой карточки
  addNewCard_Div.classList.remove('popup_opened');
}

// Создание карточки:
function createCardFromTemplate(element) {
  const _template = document.querySelector('.template');
  const cardElement = _template.content.cloneNode(true); // клонирование карточки
  // console.log(cardElement); 
  cardElement.querySelector('.element__paragraf').textContent = element.name;
  cardElement.querySelector('img.element__group').alt = element.name;
  cardElement.querySelector('img.element__group').src = element.link;
  // cardElement.querySelector('.element__group').addEventListener('click', openImgpopup);
  let like_el = cardElement.querySelector('.element__vector');
  like_el.addEventListener('click', LikeToButton);
  if(element.like) {
    like_el.classList.add('element__vector_active');
  } else {
    like_el.classList.remove('element__vector_active');
  }

  return cardElement;
}


let big_img = document.querySelector('.popup__group-item');

// Добавление HTML-карточки в тело документа:
function inflateCard(cardArrayElement) {

  // Создаём новую карточку на основе данных из массива карточек:
  let newCard = createCardFromTemplate(cardArrayElement);
  
  // Вешаем обработчик события на кнопку карточки для удаления карточки:
  newCard.querySelector('.element__card-del').addEventListener('click', (evnt) => {evnt.target.closest('.element').remove();});
  
  // Вешаем обработчик события на изображение карточки для показа полного изображения:
  newCard.querySelector('.element__group').addEventListener('click', ()=>{
    big_img.src = cardArrayElement.link;
    let textImg = document.querySelector('.text__img');
    textImg .textContent = cardArrayElement.name;
    popupModal.classList.toggle('popup__open-img');
  });   //открытие картинки

  let els = document.querySelector('.elements');
    els.prepend(newCard);
    
}

// ----> Добавление всех карточек 
initialCards.forEach(function(el) {
  inflateCard(el);
});


function LikeToButton(event) {
  event.target.classList.toggle('element__vector_active'); // активна форма лайка
}

elmentIkon.forEach(function (element){
  element.addEventListener('click', LikeToButton); //лайк сердечка
});



// Запрос всех элементов кнопок удаления карточек:
let delBtns = document.querySelectorAll('.element__card-del');
// Навешивание обработчика удаления карточки для каждой кнопки удаления карточки:
delBtns.forEach(function(el) {
  el.addEventListener('click', (evnt) => {evnt.target.closest('.element').remove();});
});



// Кнопка добавления новой карточки:
const addNewCard_Btn = document.querySelector('.profile__add');

// Форма (Div) добавления новой карточки:
const addNewCard_Div = document.querySelector('.popup_card');

// Кнопка закрытия формы добавления новой карточки:
const closeNewCard_Btn = document.querySelector('.popup__close_card');

// Действие при нажатии кнопки добавления новой карточки:
addNewCard_Btn.addEventListener('click', () => addNewCard_Div.classList.toggle('popup_opened'));

// Действие при нажатии кнопки закрытия формы добавления новой карточки:
closeNewCard_Btn.addEventListener('click', () => addNewCard_Div.classList.toggle('popup_opened'));



const popupModalCloseBtn = document.querySelector('.popup__close_img');
popupModalCloseBtn.addEventListener('click', ()=>{popupModal.classList.toggle('popup__open-img')});


