const profileCloseButton = document.querySelector('.popup__close');
const profilePopup  = document.querySelector('.profile-popup');
const popup = document.querySelector('.popup')
const profileOpenButton = document.querySelector('.profile__edit');
const profileSubmitButton = document.querySelector('.popup__submit');
const nameTitle = document.querySelector('.profile__title');
const nameParagraf = document.querySelector('.profile__paragraf');
const profileForm = document.querySelector('.popup__text');
const formInput = document.querySelector('.popup__paragrah_type_name');
const formactiviti = document.querySelector('.popup__paragrah_type_activ');
const inputCard = document.queryCommandIndeterm('.popup__paragrah_type_card');




    function profileFalue() {
        formInput.value = nameTitle.textContent;
        formactiviti.value = nameParagraf.textContent;
        //profilePopup .classList.add('popup_opened'); // открытие popup
     }

    function openPopup() {
        popup.classList.add('popup_opened');
  }

    function closePopup() {
      popup.classList.remove('popup_opened');
    }

     
   function handleProfileFormSubmit (e) {
    e.preventDefault();
    const nameValue = formInput.value;
    const activitiValue = formactiviti.value;
    nameTitle.textContent = nameValue;
    nameParagraf.textContent = activitiValue;
    closePopup();
   }

    profileOpenButton.addEventListener('click', openPopup);
    profileOpenButton.addEventListener('click', profileFalue);
    profileCloseButton.addEventListener('click', closePopup);
    profileForm.addEventListener('submit', handleProfileFormSubmit);








///////////5 проектная работа/////
const inputCardlink = document.querySelector('.popup__paragrah_type_card-link');
const buttonCard = document.querySelector ('.element__button-card');


const textTitle = document.querySelector('.popup__title')
const popupImageItem = document.querySelector('.popup__group-item');
const elements = document.querySelector('.elements');
const elementClone = document.querySelector('.element');
const article = document.querySelector('.element__template');

// Получение элемента-контейнера Div, внутри которого будет изображение в оригинале (класс для картинки: popup__open-img): 
const popupModal = document.querySelector('.popup-modal'); // form

const elmentIkon = document.querySelectorAll('.element__vector');
// const delImg = document.querySelector('.element__card-del');
const popupImg = document.querySelector('.popup__group-item');
const elemenCardImg = document.querySelector('.element__group');

// Массив карточек
const initialCards = [
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
function addNewCard() {
  const _name = document.querySelector('.popup__paragrah.popup__paragrah_type_card').value;
  console.log("name = " + _name);
  const _link = document.querySelector('.popup__paragrah.popup__paragrah_type_card-link').value;
  console.log("link = " + _link);
  const new_el = {
    name : _name,
    link : _link,
  };

 // initialCards.push(new_el);
  //inflateCard(new_el);
 

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
  const like_el = cardElement.querySelector('.element__vector');
  like_el.addEventListener('click', LikeToButton);
  if(element.like) {
    like_el.classList.add('element__vector_active');
  } else {
    like_el.classList.remove('element__vector_active');
  }
  function LikeToButton(event) {
    event.target.classList.toggle('element__vector_active'); // активна форма лайка
  }
  elmentIkon.forEach(function (element){
    element.addEventListener('click', LikeToButton); //лайк сердечка
  });

// Запрос всех элементов кнопок удаления карточек:
const delBtns = document.querySelectorAll('.element__card-del');
// Навешивание обработчика удаления карточки для каждой кнопки удаления карточки:
delBtns.forEach(function(el) {
  el.addEventListener('click', (evnt) => {evnt.target.closest('.element').remove();});
});


  return cardElement;
}


const big_img = document.querySelector('.popup__group-item');

// Добавление HTML-карточки в тело документа:
function prependCard (cardArrayElement) {

  // Создаём новую карточку на основе данных из массива карточек:
  const newCard = createCardFromTemplate(cardArrayElement);
  
  // Вешаем обработчик события на кнопку карточки для удаления карточки:
  newCard.querySelector('.element__card-del').addEventListener('click', (evnt) => {evnt.target.closest('.element').remove();});
  
  // Вешаем обработчик события на изображение карточки для показа полного изображения:
  newCard.querySelector('.element__group').addEventListener('click', ()=>{
    big_img.src = cardArrayElement.link;
    const textImg = document.querySelector('.text-img');
    textImg .textContent = cardArrayElement.name;
    openPopup(popupModal);
    //popupModal.classList.toggle();
  });   //открытие картинки


  const els = document.querySelector('.elements');
    els.prepend(newCard);
}

// ----> Добавление всех карточек 
initialCards.forEach(function(el) {
  prependCard (el);
});





// Кнопка добавления новой карточки:
const addNewCard_Btn = document.querySelector('.profile__add');

// Форма (Div) добавления новой карточки:
const addNewCard_Div = document.querySelector('.popup_card');

// Кнопка закрытия формы добавления новой карточки:
const closeNewCard_Btn = document.querySelector('.popup__close_card');

closeNewCard_Btn.addEventListener('click', closePopup);

// Действие при нажатии кнопки добавления новой карточки:
addNewCard_Btn.addEventListener('click', popupCard);

function popupCard() {
  openPopup(addNewCard_Div);
  popupCardSubmit.addEventListener('submit', handleProfileFormSubmit);
  popupCardNew.addEventListener('click', function(){closePopup(addNewCard_Div);});
}





