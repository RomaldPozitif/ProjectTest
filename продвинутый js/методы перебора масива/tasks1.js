const films = [
  {
    name: 'Titanic',
    rating: 9
  },
  {
    name: 'Die hard 5',
    rating: 5
  },
  {
    name: 'Matrix',
    rating: 8
  },
  {
    name: 'Some bad film',
    rating: 4
  }
];



function showGoodFilms(arr) {
  return arr.filter(obj => obj.rating > 8);
}


function showListOfFilms(arr) {
  return arr.map(obj => obj.name)
    .reduce((a, b) => `${a}, ${b}`);
}

function setFilmsIds(arr) {
  return arr.map((obj, index) => {
    obj.id = index;
    return obj;
  });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every(obj => typeof (obj.id) === 'number');
}

console.log(showGoodFilms(films));
console.log(showListOfFilms(films));
console.log(setFilmsIds(films));
console.log(checkFilms(tranformedArray));


