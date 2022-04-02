/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



// Код возьмите из предыдущего домашнего задания
'use strict';


const personalMovieDB = {
  count: null,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start() {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (this.count == null || this.count == '' || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    return this;
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      let a;
      let b;
      do {
        a = prompt('Один из последних просмотренных фильмов?', '');
      } while (a === null || a === '' || a.length > 50);
      do {
        b = prompt('На сколько оцените его?', '');
      } while (b === null || b === '' || b.length > 50);
      this.movies[a] = b;
    }
    return this;
  },
  detectPersonalLevel() {
    if (this.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (this.count < 30 && this.count > 10) {
      alert('Вы классический зритель!');
    } else if (this.count > 30) {
      alert('Вы киноман');
    } else {
      alert("Произошла ошибка");
    }
    return this;
  },
  showMyDB() {
    if (this.privat == false) {
      console.log(this);
    }
    return this;
  },
  writeYourGenres() {
    for (let i = 1; i < 4; i++) {
      let genre;
      while (true) {
        genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if (genre !== null && genre != '') break;
      }
      this.genres.push(genre);
    }
    this.genres.forEach((genre, i) => console.log(`Любимый жанр ${i + 1} - это ${genre}`));
    return this;
  },
  toggleVisibleMyDB() {
    this.privat = !this.privat;
    return this;
  }

};
// personalMovieDB
//   .start()
//   .rememberMyFilms()
//   .detectPersonalLevel()
//   .showMyDB()
//   .writeYourGenres()
//   .toggleVisibleMyDB();



