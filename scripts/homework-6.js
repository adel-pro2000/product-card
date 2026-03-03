// Задние №1: Создайние объекта: анкетные данные

const personalInfo = {
  name: "Адель",
  surname: "Биккенин",
  email: "gaamil86@mail.ru",
  occupation: "продавец",
  position: "директор",
  age: 39,
  country: "Россия",
  city: "Казань",
  maritalStatus: "женат",
  hobbies: "спать"
}

console.log(personalInfo);

// Задание №2: Создание объекта: данные автомобиля

const carInfo = {
  brand: "Mitsubishi",
  model: "Lancer 9",
  year: 2007,
  color: "серебристый",
  transmission: "механическая",
}

carInfo.owner = personalInfo;

console.log(carInfo);

// Задание №3: Создание функции, которая берет аргументом предыдущий объект и проверяет наличие в нем свойства "максимальная скорость",
// а если такого свойства нет, то функция должна создать его и записать в него значение, если такое свойство уже есть в объекте,
// то функция должна вернуть этот объект без изменений.

function addMaxSpeed(carInfo) {
  if (!carInfo.maxSpeed) {
    carInfo.maxSpeed = 204;
  } else {
  return carInfo;
  }
}

addMaxSpeed(carInfo);

console.log(carInfo);

// Задание №4: Создание функции, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта,
// которое нужно вывести и выводит его значение.

function showCarObjectProperty(obj, prop) {
  console.log(obj[prop]);
}

showCarObjectProperty(personalInfo, "age");
showCarObjectProperty(carInfo, "model");

// Задание №5: Создание массива, который содержит названия продуктов

const products = ["колодки тормозные передние", "фильтр масляный", "щетка стеклоочистителя", "масло моторное", "свеча зажигания", "ремень ГРМ", "аккумулятор", "радиатор", "генератор", "стартер"];

console.log(products);

// Задание №6: Создание массива, состоящего из объектов и добавление к нему еще одного объекта

const cars = [
  {
    brand: "Mitsubishi",
    model: "Lancer 9",
    year: 2007,
    color: "серебристый",
    type: "седан"
  },
  {
    brand: "Toyota",
    model: "Camry",
    year: 2010,
    color: "черный",
    type: "седан"
  },
  {
    brand: "Honda",
    model: "Civic",
    year: 2012,
    color: "белый",
    type: "седан"
  },
  {
    brand: "Ford",
    model: "Focus",
    year: 2015,
    color: "серый",
    type: "хэтчбек"
  },
  {
    brand: "Opel",
    model: "Insignia",
    year: 2018,
    color: "красный",
    type: "универсал"
  },
  {
    brand: "Tesla",
    model: "Cybertruck",
    year: 2021,
    color: "металлик",
    type: "пикап"
  },
];

cars.unshift(
  {
    brand: "Lada",
    model: "Granta",
    year: 2019,
    color: "желтый",
    type: "седан"
  }
);

console.log(cars);

// Задание №7: Создание дополнительного массива и объединение его с предыдущим массивом

const americanClassicCars = [
  {
    brand: "Chevrolet",
    model: "Camaro",
    year: 1969,
    color: "красный",
    type: "купе"
  },
  {
    brand: "Ford",
    model: "Mustang",
    year: 1970,
    color: "желтый",
    type: "купе"
  },
  {
    brand: "Plymouth",
    model: "Cuda",
    year: 1971,
    color: "черный",
    type: "хэтчбек"
  },
  {
    brand: "Dodge",
    model: "Charger",
    year: 1969,
    color: "оранжевый",
    type: "купе"
  },
  {
    brand: "Ford",
    model: "Bronco",
    year: 1970,
    color: "зеленый",
    type: "пикап"
  },
  {
    brand: "Cadillac",
    model: "Eldorado",
    year: 1971,
    color: "белый",
    type: "купе"
  },
];

const allCars = cars.concat(americanClassicCars);

console.log(allCars);

// Задание №8: Создание функции, которая принимает массив сущностей с задания №8, 
// добавляет к ним свойсво раритет: true, если год выпуска машины меньше или равен 1970, и false, если год выпуска машины больше 1970, 
// и возвращает новый массив с этими сущностями.

const rareCars = allCars.map(car => ({
  ...car,
  isRare: car.year <= 1970
}));

console.log(rareCars);