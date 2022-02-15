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

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function find_bigger_name(names) {
  bigger = names[0];

  for (namee in names) {
    if (names[namee].length > bigger.length) {
      bigger = names[namee];
    }
  }

  return bigger;
}

console.log(find_bigger_name(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function most_repeated(numbers) {
  let num = {};

  for (let index = 0; index < numbers.length; index += 1) {
    let valor = numbers[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(most_repeated([2, 3, 2, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function sum_n(n) {
  sum = 0;
  index = 1;

  for (let i = 0; i < n; i += 1) {
    sum += index;
    index += 1;
  }

  return sum;
}

console.log(sum_n(5));

/*
7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
*/

function compare_final(word, ending) {
  let substring_word = word.substring(word.length - ending.length);
  
  if (substring_word === ending) {
    return true;
  } else {
    return false;
  }
}

console.log(compare_final('trybe', 'be'));
