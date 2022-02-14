let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1
function print() {
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
  }
}

// 2
function sum() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  
  console.log(sum);
}

// 3
function media() {
  let sum = 0;
  let media = undefined;
  
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  
  media = sum / numbers.length;
  console.log(media);
}

// 4
function bigger_then_20() {
  result = media();

  if (result > 20) {
    console.log('Valor maior que 20');
  } else {
    console.log('Valor menor ou igual a 20');
  }
}

// 5
function bigger_number() {
  actual = numbers[0];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > actual) {
      actual = numbers[i];
    }
  }

  console.log(actual);
}

// 6
function odd_numbers() {
  let total = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
      total += 1;
    }
  }

  if (total > 0) {
    console.log(total);
  } else {
    console.log('Nenhum valor ímpar encontrado');
  }
}

// 7
function lower_number() {
  actual = numbers[0];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < actual) {
      actual = numbers[i];
    }
  }

  console.log(actual);
}

// 8
function print_from_1_to_25() {
  let array = [];
  
  for (let i = 1; i < 26; i += 1) {
    array.push(i);
  }

  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
  }
}

function div() {
  let array = [];
  
  for (let i = 1; i < 26; i += 1) {
    array.push(i);
  }

  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i] / 2);
  }
}
