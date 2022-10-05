const funds = [
  { amount: 1400 },
  { amount: 2400 },
  { amount: 1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 }
];

const getPositiveIncomeAmount = (data) => {
  return data.filter(pozitive => pozitive.amount > 0)
    .map(obj => obj.amount)
    .reduce((sum, cur) => sum + cur);
};

const getTotalIncomeAmount = (data) => {
  const f = 'ok'
  if (data.map(obj => obj.amount)
    .every(value => value > 0) === false) {
    return data.map(obj => obj.amount)
      .reduce((sum, cur) => sum + cur);
  } else {
    return getPositiveIncomeAmount(data);
  }
};

console.log(getPositiveIncomeAmount(funds));
console.log(getTotalIncomeAmount(funds));
