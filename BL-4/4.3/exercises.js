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

// 4
function triangle(n) {
  let symbol = '*';
  let inputLine = '';

  let midOfMatrix = (n + 1) / 2;
  let controlLeft = midOfMatrix;
  let controlRight = midOfMatrix;

  for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
      if (columnIndex > controlLeft && columnIndex < controlRight) {
        inputLine = inputLine + symbol;
      } else {
        inputLine = inputLine + ' ';
      }
    }
    console.log(inputLine);
    inputLine = '';
    controlRight += 1;
    controlLeft -= 1
  };
}
