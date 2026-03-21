// Задание № 6: Импортируем константу созданную в файле comments.js.

import { socialMediaComments } from "./comments.js";

console.log(socialMediaComments);

// Задание №2 Создание чилового массива от 1 до 10 и фильтрация его таким образом, 
// что бы мы получил массив чисел, начиная с 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersStartingWithFive = numbers.filter(number => number >= 5);

console.log(numbersStartingWithFive);

// Задание №3: Создание массива строк, относящихся к кухонным приборам и проверка,
// есть ли в массиве какая-то определенная сущность.

const kitchenAppliances = [
  'microwave oven',
  'blender',
  'coffee machine',
  'kitchen scales',
  'kettle'
];

console.log(kitchenAppliances.includes('coffee machine'));

// Задание №4: Написание функции, которая аргументом будет принимать массив и изменять его порядок 
// на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

const arrayReverse = (array) => array.reverse();

console.log(arrayReverse(numbers));
console.log(arrayReverse(kitchenAppliances));

// Задание №7: Вывод в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const filteredComments = socialMediaComments.filter(comment => comment.email.includes('.com'));

console.log(filteredComments);

// Задание №8: Переборка массива таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, 
// а те, у кого id больше 5, имели postId: 1

const updatedComments = socialMediaComments.map(comment => 
comment.postId = comment.id <= 5 ? {...comment, postId: 2} : {...comment, postId: 1});

console.log(updatedComments);

// Задание №9: Переборка массива, что бы объекты состояли только из айди и имени

const abbreviationOfCommentParameters = socialMediaComments.map(comment => ({id: comment.id, name: comment.name,}));

console.log(abbreviationOfCommentParameters);

// Задание №10: Переборка массива, добавление объектам свойства isInvalid и проверка того,
//  что если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const newCommentParameter = socialMediaComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
  }));

console.log(newCommentParameter);

// Задание №11: Используя метод reduce, вывести массив почт и провернуть тоже самое с помощью метода map

const emailArray = socialMediaComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailArray);

const arrayOfCommentatorsEmails = socialMediaComments.map(comment => comment.email);

console.log(arrayOfCommentatorsEmails);

// Задание №12: Переборка массива с задания №11, приведение его к строке методами toString и join. 

const emailArrayToString = emailArray.toString();

console.log(emailArrayToString);

const arrayCommentersEmailsToString = arrayOfCommentatorsEmails.join(', ');

console.log(arrayCommentersEmailsToString);