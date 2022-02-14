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

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function find_bigger(numbers) {
  bigger = numbers[0];

  for (number in numbers) {
    if (numbers[number] > bigger) {
      bigger = numbers[number];
    }
  }

  return numbers.indexOf(bigger);
}

console.log(find_bigger([2, 3, 6, 7, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function find_lower(numbers) {
  lower = numbers[0];

  for (number in numbers) {
    if (numbers[number] < lower) {
      lower = numbers[number];
    }
  }

  return numbers.indexOf(lower);
}

console.log(find_lower([2, 4, 6, 7, 10, 0, -3]));
