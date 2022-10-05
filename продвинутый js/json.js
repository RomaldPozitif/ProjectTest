

const person = {
  name: 'Alex',
  tel: '+380636047541',
  parent: {
    mom: 'Olga',
    dad: 'Mike'
  }
};


console.log(JSON.stringify(person));

// clone.parent.mom = 'n';

// console.log(clone.parent.mom);
// console.log(person.parent.mom);

