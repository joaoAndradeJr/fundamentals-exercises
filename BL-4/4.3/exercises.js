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

square(5);