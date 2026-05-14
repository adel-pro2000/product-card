// Задание №4 первый уровень: К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию), если он не заполнен -
// форма не отправляется. Кнопка "Подписаться" и есть "отправкой формы", при нажатии на
// которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }

import { Modal } from "./modal.js";
import { Form } from "./form.js";

const emailForm = document.getElementById('email-form');

emailForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
})

// Задание №5 второй уровень: Создать кнопку "Регистрация". Создать модальное окно,
// используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас
// открывается модальное окно путем добавления modal-showed к div с классом modal.
// Не забываем добавить кнопку для закрытия модалки (крестик в углу).

const registrationBtn = document.getElementById('open-modal-btn');
const modal = new Modal('modal-window');

registrationBtn.addEventListener('click', () => {
  modal.open();
});

// Задание №6: Добавить в модальное окно форму с полями: имя, фамилия, email. И прописать логику, 
// которая при отправке формы будет выводить в консоль объект с данными, которые были введены в 
// форму. И не забываем про валидацию, если какое-то поле не заполнено - форма не отправляется.

let user = null;

const userForm = new Form('registerForm');

userForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  const values = userForm.getValues();
  const password = values.password;
  const confirmPassword = values['confirm-password'];
  const passwordsMatch = (password === confirmPassword);
  const isFormValid = userForm.isValid();
    if (!isFormValid || !passwordsMatch) {
      alert('Не то вводишь! Давай исправляй!');
      return;
    }
  const formData = userForm.getValues();

  formData.createdOn = new Date();

  user = formData;

  console.log('Твои данные:', user);
  alert('Ты зарегестрирован! Загляни в консоль (F12), там вся инфа о тебе!');

  modal.close();
  userForm.clear();
});

