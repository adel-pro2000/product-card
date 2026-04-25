// Задание №4 первый уровень: К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию), если он не заполнен -
// форма не отправляется. Кнопка "Подписаться" и есть "отправкой формы", при нажатии на
// которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }

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
const registrationModal = document.getElementById('modal-window');
const closeBtn = document.getElementById('close-modal-btn');

function openModal() {
  registrationModal.classList.add('modal-showed');
}

registrationBtn.addEventListener('click', openModal);

function closeModal() {
  registrationModal.classList.remove('modal-showed');
}

closeBtn.addEventListener('click', closeModal);

// Задание №6: Добавить в модальное окно форму с полями: имя, фамилия, email. И прописать логику, 
// которая при отправке формы будет выводить в консоль объект с данными, которые были введены в 
// форму. И не забываем про валидацию, если какое-то поле не заполнено - форма не отправляется.

let user = null;

const userForm = document.getElementById('registerForm');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = userForm.password.value;
  const confirmPassword = userForm['confirm-password'].value;
  const passwordsMatch = (password === confirmPassword);
  const isFormValid = userForm.checkValidity();
    if (!isFormValid || !passwordsMatch) {
      alert('Не то вводишь! Давай исправляй!');
      return;
    }

  const formData = {
    name: userForm.name.value,
    surname: userForm.surname.value,
    'date-of-birth': userForm['date-of-birth'].value,
    login: userForm.login.value,
    password: userForm.password.value,
    createdOn: new Date()
  };

  user = formData;

  console.log('Твои данные:', user);
  alert('Ты зарегестрирован! Загляни в консоль (F12), там вся инфа о тебе!');

  closeModal();

});

