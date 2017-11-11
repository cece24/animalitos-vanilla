// ES6

let count = 0;

const numbers = [1,2,3,4];

class Song {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const hit = new Song ('Backstreet Boys', 2001);
console.log(hit);


numbers.forEach(function(number) {
  console.log(number);
});

// is the same as

numbers.forEach((number) => {
  console.log(number);
});

// (number) => is an arrow function
