const checkNumber = (number, luckNumber) => (
  number === luckNumber ? 'Parabéns você ganhou' : 'Tente novamente'
);

const shuffleNumber = (number) => {
  const luckNumber = parseInt(Math.random() * (6 - 1) + 1);
  return checkNumber(number, luckNumber);
};

console.log(shuffleNumber(3));
