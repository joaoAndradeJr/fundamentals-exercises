function changeCharDecode(char) {
  switch (char) {
  case '1':
    return 'a';
  case '2':
    return 'e';
  case '3':
    return 'i';
  case '4':
    return 'o';
  case '5':
    return 'u';
  default:
    return char;
  }
}

function decode(str) {
  let sentence = str.split('');
  let decoded = [];

  for (let i = 0; i < sentence.length; i += 1) {
    decoded.push(changeCharDecode(sentence[i]));
  }

  return decoded.join('');
}

module.exports = decode;
