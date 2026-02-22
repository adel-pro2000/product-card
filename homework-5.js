// Домашнее заданеие №5

// Задние №1: Создние функии, котороя принимает 2 параметра: город и темапературу и выводит сообщение в консоль 
// "Сейчас в X температура - Y градусов по Цельсию".

function showCityTemperature(city, temperature) {
  console.log(`В городе ${city} сейчас ${temperature}C тепла`);
}

showCityTemperature ('Казань', 25);
showCityTemperature ('Москва', 26);

// Задние №2.1: Создние переменной, которая хранит внутри себя скорость света.

const SPEED_OF_LIGHT = 299792458

console.log(`Скорость света в вакууме ${SPEED_OF_LIGHT}м/с`);

// Задание №2.2: Создание функцию, которая проверяет скорость относительно скорости света.

function checkSpeed(checkedSpeed) {
  if (checkedSpeed < SPEED_OF_LIGHT) {
    console.log ('Субсветовая скорость');
  } else if (checkedSpeed === SPEED_OF_LIGHT) {
      console.log ('Скорость света');
  } else {
      console.log ('Сверхсветовая скорость');
  }
}

checkSpeed(1000000000000000);

// Задание №3.1: Создние 2-х переменной для хранения цены продута и наименования этого продукта.

let productPrice = 20;
let productName = 'Хлеб';

// Задание №3.2: Создние фунции для определения финансовой возможности приобретения продута.

function canBuyProduct(balance) {
  if (balance >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${productPrice - balance}$, пополните баланс`);
  }
}

canBuyProduct(100)
canBuyProduct(20)
canBuyProduct(10)

// Задание №4: Создние фунции для расчета скорости свободного падения тела высоты.

function calculateFreeFallSpeed(time) {
  const G = 9.81; // Ускорение свободного падения
  console.log(`${Math.round(G * time)} м/с`);
}

calculateFreeFallSpeed(11);

// Задание №5: Создние 3-х разных переменных.

let studentAge = {
  name: 'Максим',
  age: 17
};

const G = 0.0000000000667; /// Гравитационная постоянная, постоянная Ньютона

let goodMorning = `Доброе утро, ${studentAge.name}!`;

console.log(studentAge);
console.log(G);
console.log(goodMorning);

