// Задание №4. Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal. Он будет принимать 1 параметр через конструктор - айди модального окна. Внутри класса будут методы:
// I. Для открытия модального окна.
// II. Для закрытия модального окна.
// III. Для проверки, открыто ли сейчас модальное окно.
// IV. Метод, который слушает кнопку (крестик) для закрытия модалки и закрывает модалку (реализовать через eventListener) и вызывать в конструкторе

export class Modal {
  constructor(modalID) {
    this.modal = document.getElementById(modalID);
    this.modalShowed = 'modal-showed';
    this.closeBtn = this.modal.querySelector('.close-modal');

    this.initCloseButton();
  }

  open() {
    this.modal.classList.add(this.modalShowed);
  }

  close() {
    this.modal.classList.remove(this.modalShowed);
  }

  isOpen() {
    return this.modal.classList.contains(this.modalShowed);
  }
  
  initCloseButton() {
    this.closeBtn.addEventListener('click', () => {
      this.close();
    });
  }
}
