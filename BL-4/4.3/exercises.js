// 1
function square(n) {
  let input = '';
  let symbol = '*';

  for (let i = 0; i < n; i += 1) {
    input += symbol;
  }

  for (let i = 0; i < n; i += 1) {
    console.log(input);
  }
}

// 2
function triangle_retangle(n) {
  let input = '';
  let symbol = '*';

  for (let i = 0; i < n; i += 1) {
    input += symbol;
    console.log(input);
  }
}

// 3
function inverted_triangle(n) {
  let symbol = '*';
  let inputLine = '';
  let inputPosition = n;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
      if (columnIndex < inputPosition) {
        inputLine += ' ';
      } else {
        inputLine += symbol;
      }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
  }
}
