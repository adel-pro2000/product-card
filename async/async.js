async function loadCustomers() {

  const customersFromLocalStorage = localStorage.getItem('customers');
  const loadingElement = document.querySelector('.loading');

  if (customersFromLocalStorage) {
    const customers = JSON.parse(customersFromLocalStorage);

    loadingElement.textContent = '';

    renderCustomers(customers);
    return customers;
  }

  loadingElement.textContent = 'Данные загружаются...';

  setTimeout(async () => {
    
    try {
      const response = await fetch('data.json');

      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }

      const data = await response.json();

      localStorage.setItem('customers', JSON.stringify(data.customers));

      loadingElement.textContent = '';

      renderCustomers(data.customers);

    } catch (error) {
      loadingElement.textContent = error.message;
    }
  }, 4000);
  }


loadCustomers();

function renderCustomers(customers) {
  const cardsContainer = document.querySelector('.cards');
  const template = document.getElementById('card-template');

  customers.forEach(customer => {
    const card = template.content.cloneNode(true);

    card.querySelector('.card__id').textContent = `ID: ${customer.id}`;
    card.querySelector('.card__name').textContent = `Имя: ${customer.name}`;
    card.querySelector('.card__surname').textContent = `Фамилия: ${customer.surname}`;
    card.querySelector('.card__age').textContent = `Возраст: ${customer.age}`;
    card.querySelector('.card__phone').textContent = `Телефон: ${customer.phone}`;
    card.querySelector('.card__workplace').textContent = `Место работы: ${customer.workplace}`;
    card.querySelector('.card__position').textContent = `Должность: ${customer.position}`;

    cardsContainer.append(card);
  });
}

const deleteAllCardsButton = document.getElementById('deleteAllCards');

deleteAllCardsButton.addEventListener('click', () => {
  const cardsContainer = document.querySelector('.cards');

  cardsContainer.innerHTML = '';

});

const addAllCardsButton = document.getElementById('addAllCards');

addAllCardsButton.addEventListener('click', () => {
  try {
    const customersFromLocalStorage = localStorage.getItem('customers');

    if (!customersFromLocalStorage) {
      throw new Error('Идет загрузка...');
    }

    const cardsContainer =
      document.querySelector('.cards');

    if (cardsContainer.children.length > 0) {
      throw new Error('Все карты уже выведены');
    }

    const customers = JSON.parse(customersFromLocalStorage);

    renderCustomers(customers);

  } catch (error) {
    document.querySelector('.loading').textContent = error.message;
  }
});

const deleteCardButton = document.getElementById('deleteCard');

deleteCardButton.addEventListener('click', () => {
  try {
    const idToDelete = prompt('Введите ID клиента');
    const customersFromLocalStorage = localStorage.getItem('customers');

    if (!customersFromLocalStorage) {
      throw new Error('Данные отсутствуют');
    }

    const customers = JSON.parse(customersFromLocalStorage);
    const filteredCustomers = customers.filter(customer =>
        customer.id !== idToDelete
      );

    if (filteredCustomers.length === customers.length) {
      throw new Error('Клиент не найден');
    }

    localStorage.setItem('customers', JSON.stringify(filteredCustomers));

    document.querySelector('.cards').innerHTML = '';

    renderCustomers(filteredCustomers);

  } catch (error) {
    document.querySelector('.loading').textContent = error.message;
  }
});
//localStorage.removeItem('customers');//