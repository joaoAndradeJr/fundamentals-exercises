const hydrate = (str) => {
  let regex = /[0-9]/g;
  let values = str.match(regex);
  let sum = 0;

  for (let i = 0; i < values.length; i += 1) {
    sum += Number(values[i]);
  }

  if (sum > 1) {
    return `${sum} copos de água`;
  }

  return `${sum} copo de água`;
};

module.exports = hydrate;
