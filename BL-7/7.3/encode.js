function changeCharEncode(char) {
  switch (char) {
  case 'a':
    return 1;
  case 'e':
    return 2;
  case 'i':
    return 3;
  case 'o':
    return 4;
  case 'u':
    return 5;
  default:
    return char;
  }
}

function encode(str) {
  let sentence = str.split('');
  let encoded = [];

  for (let i = 0; i < sentence.length; i += 1) {
    encoded.push(changeCharEncode(sentence[i]));
  }

  return encoded.join('');
}

module.exports = encode;
