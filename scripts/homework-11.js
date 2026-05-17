// Задание №3: Реализовать абстрактный класс Drink (абстрактный он, потому что не должен иметь 
// экземпляров. Он используется только для наследования). От него мы будем создавать 
// наследников - лимонад, чай, кофе и прочие напитки, которые посчитаете нужным. 
// Их должно быть от 3 до 5.

class Drink {
  #temperature;

  constructor(title, size, price, temperature) {

     if (new.target === Drink) {
      throw new Error('Нельзя создавать экземпляр абстрактного класса Drink');
    }
    
    this.title = title;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  
  getInfo() {
    return `${this.title}, ${this.size}, ${this.price}`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  #prepare () {
    return `Готовим ${this.title}`;
  }

  realization () {
    return `Продажа ${this.title} объемом ${this.size}`;
  }

  getDrink () {
    return this.#prepare();
  }
}

class Coffe extends Drink {
  constructor(title, size, price, temperature, beanType, roastLevel, strength, withSugar, sugarAmount, caffeineMg, withMilk, milkType) {
    super(title, size, price, temperature);
    this.beanType = beanType;
    this.roastLevel = roastLevel;
    this.strength = strength;
    this.withSugar = withSugar;
    this.sugarAmount = sugarAmount;
    this.caffeineMg = caffeineMg;
    this.withMilk = withMilk;
    this.milkType = milkType;
  }
}

class Tea extends Drink {
  constructor(title, size, price, temperature, teaSort, withSugar, sugarAmount, withMilk, milkType) {
    super(title, size, price, temperature);
    this.teaSort = teaSort;
    this.withSugar = `С сахаром: ${withSugar}`;
    this.sugarAmount = `Сколько ложек: ${sugarAmount}`;
    this.withMilk = `С молоком: ${withMilk}`;
  }
}

class Kvass extends Drink {
  constructor(title, size, price, temperature, color) {
    super(title, size, price, temperature);
    this.color = color;
  }
}

class FizzyWater extends Drink {
  constructor(title, size, price, temperature, taste) {
    super(title, size, price, temperature)
    this.taste = taste;
  }
}

// Задание №4: После того, как реализовали класс "напиток" и его наследников, приступаем к классу "Кафе". Он у нас будет принимать 2 параметра, например название кафе и его месторасположение. Реализуем 2 метода внутри него:
// 1) получить информацию про кафе
// 2) заказать напиток

class Cafe {
  constructor(name, adress) {
    this.name = `Название: ${name}`;
    this.adress = `Адрес: ${adress}`;
  }

  getInfo() {
    return `${this.name}, ${this.adress}`;
  }

  order(drink) {
    return `Заказ принят.${drink.realization()} ${drink.getDrink()} ${drink.getInfo()} Температура: ${drink.getTemperature()}`;
  }
}

const cafe = new Cafe('У дороги', 'Казань, ул. Сафиулина, 17');

const tea = new Tea(
  'Чай',
  '300 мл',
  150,
  'горячий',
  'чёрный',
  'да',
  2,
  'нет',
  'нет',
);

console.log(cafe.order(tea));
console.log(cafe.getInfo());
console.log(tea);
