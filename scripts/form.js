//Задание №5. Создать файл Form.js и реализовать класс для формы под названием Form. Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
// I. Для получения всех значений формы.
// II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
// III. Для сброса значений формы.


export class Form {
  constructor(idForm) {
    this.form = document.getElementById(idForm);
  }

  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  clear() {
    this.form.reset();
  }
}

const registerForm = new Form('registerForm');

registerForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(registerForm.getValues());
});

