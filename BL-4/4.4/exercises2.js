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
