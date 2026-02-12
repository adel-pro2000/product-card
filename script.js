// Изменение цвета первой карточки товара

const changeColorFirstCardBtn = document.getElementById('change-color-first-card-btn');
const firstProductCard = document.querySelector('.product-card');
const oranjColor = 'rgba(255, 165, 0, 0.3)'; // Новый цвет для первой карточки

changeColorFirstCardBtn.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = oranjColor;
});

// Изменение цвета всех карточек товара

const changeColorAllCardsBtn = document.getElementById('change-color-all-cards-btn');
const productCards = document.querySelectorAll('.product-card');
const radColor = 'rgba(255, 0, 0, 0.5)'; // Новый цвет для всех карточек

changeColorAllCardsBtn.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = radColor
  )
});

// Переход на главную страницу Google

const openGoogleBtn = document.getElementById('open-google-btn');
openGoogleBtn.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы уверены, что хотите перейти на главную страницу Google?');
  
  if (answer===true) {
    window.open('https://www.google.com', '_blank');
  } else {
    console.log('Переход на Google отменён пользователем.');
  }
}

// Вывод контента главного заголовака в консоль

const mainTitleContent = document.querySelector('.product-card-wrapper__title');

mainTitleContent.addEventListener('mouseenter', () => {
  console.log(mainTitleContent.textContent);
});

// Кнопка меняющая свой цвет при каждом клике

const clickMeBtn = document.getElementById('click-me-btn');

clickMeBtn.addEventListener('click', () => {
  clickMeBtn.classList.toggle('btn-second');
});
