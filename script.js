// Изменение цвета первой карточки товара

const changeColorFirstCardBtn = document.getElementById('btn-change-color-first-card');
const firstProductCard = document.querySelector('.product-card');
const orangeColor = 'rgba(255, 165, 0, 0.3)'; // Новый цвет для первой карточки

changeColorFirstCardBtn.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = orangeColor;
});

// Изменение цвета всех карточек товара

const changeColorAllCardsBtn = document.getElementById('btn-change-color-all-cards');
const productCards = document.querySelectorAll('.product-card');
const redColor = 'rgba(255, 0, 0, 0.5)'; // Новый цвет для всех карточек

changeColorAllCardsBtn.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = redColor
  )
});

// Переход на главную страницу Google

const openGoogleBtn = document.getElementById('btn-open-google');
openGoogleBtn.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы уверены, что хотите перейти на главную страницу Google?');
  
  if (answer === true) {
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

const btnColorChanging = document.getElementById('btn-color-changing');

btnColorChanging.addEventListener('click', () => {
  btnColorChanging.classList.toggle('btn-second');
});
