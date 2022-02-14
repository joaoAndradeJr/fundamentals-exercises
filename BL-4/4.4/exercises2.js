// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function is_palindrome(word) {
  new_word_array = word.split('');
  new_word = new_word_array.reverse().join('');

  if (new_word !== word) {
    return false;
  } else {
    return true;
  }
}

console.log(is_palindrome('arara'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function find_bigger(numbers) {
  bigger = numbers[0];
  position = undefined;

  for (number in numbers) {
    if (numbers[number] > bigger) {
      bigger = number;
    }
  }

  position = numbers.indexOf(bigger);

  return bigger;
}

console.log(find_bigger([2, 3, 6, 7, 10, 1]));
