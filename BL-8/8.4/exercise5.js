const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  let total = 0;
  const words = names.map((word) => word.split(''));
  words.forEach((array) => array.forEach((char) => {
    if (char === 'a' || char === 'A') total += 1;
  }));
  return total;
}

console.log(containsA());

/* using reduce:

function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}

*/
