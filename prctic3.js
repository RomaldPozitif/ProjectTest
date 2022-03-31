/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {

    let a;
    let b;
    do {
      a = prompt('Один из последних просмотренных фильмов?', '');
    } while (a === null || a === '' || a.length > 50);
    do {
      b = prompt('На сколько оцените его?', '');
    } while (b === null || b === '' || b.length > 50);

    personalMovieDB.movies[a] = b;
  }
}


rememberMyFilms();


function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (numberOfFilms < 30 && numberOfFilms > 10) {
    alert('Вы классический зритель!');
  } else if (numberOfFilms > 30) {
    alert('Вы киноман');
  } else {
    alert("Произошла ошибка");
  }
}


detectPersonalLevel();


function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
  }
}

writeYourGenres();

// Код возьмите из предыдущего домашнего задания
