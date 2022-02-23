const techList = (array, person) => {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let newList = [];
  let sortedArray = array.sort();

  for (let i = 0; i < sortedArray.length; i += 1) {
    newList.push({ tech: sortedArray[i], name: person });
  }

  return newList;
};

module.exports = techList;
