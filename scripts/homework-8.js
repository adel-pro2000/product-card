// Задание №2: Импортировал массив из файла product-cards.js

import { productCards } from "./product-cards.js";

// Задание №4: Используя метод .reduce(), получаем массив объектов,
// где ключем является название продукта, а значением - его описание

const productDescriptions = productCards.reduce((acc, card) => {
  acc[card.name] = card.description;
  return acc;
}, {});

console.log(productDescriptions);

// Задание №3, №5: Создание шаблона для продуктовых карточек. Реализация функции, 
// которая при старте страницы выводит сообщение (через функцию prompt) 
// "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - 
// будет выводить введенное количество, с защитой от ввода других значений (проверка if).

function getNumberCards() {
  let requestNumberCards;
  do {
    requestNumberCards = Number(prompt('Сколько карточек отобразить? От 1 до 5'));
    if (
      isNaN(requestNumberCards) || requestNumberCards < 1 || requestNumberCards > 5
    ) {
      alert('Введите число строго от 1 до 5');
    }
  } while (
    isNaN(requestNumberCards) || requestNumberCards < 1 || requestNumberCards > 5
  );
  return requestNumberCards;
};

const productCardTemplate = document.getElementById('product-card-template');
const cardsContainer = document.querySelector('.product-card-wrapper__line');

function renderProductCards(numberCards) {
  const cards = productCards.slice(0, numberCards);
  cards.forEach(card => {
  const cardClone = productCardTemplate.content.cloneNode(true);
  cardClone.querySelector('.product-card__image').src = `images/${card.image}.jpg`;
  cardClone.querySelector('.product-card__image').alt = card.alt;
  cardClone.querySelector('.product-card__for-skin').textContent = card.skinType;
  cardClone.querySelector('.product-card__title').textContent = card.name;
  cardClone.querySelector('.product-card_description').textContent = card.description;
  const compositionList = cardClone.querySelector('.product-card__composition ul');
  card.composition.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.style.listStyleType = 'circle';
    listItem.textContent = ingredient;
    compositionList.appendChild(listItem);
  });
  cardClone.querySelector('.product-card__price-value').textContent = card.price;
  cardsContainer.appendChild(cardClone);
});
}
const numberCards = getNumberCards();
renderProductCards(numberCards);