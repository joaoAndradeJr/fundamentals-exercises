// 1
function sum(a, b) {
  return a + b;
}

// 1.2
function sub(a, b) {
  return a - b;
}

// 1.3

function mul(a, b) {
  return a * b;
}

// 1.4
function div(a, b) {
  if (a <= 0) {
    return "Não pode dividir por 0";
  } else {
    return a / b;
  }
}

// 1.5
function mod(a, b) {
  if (a <= 0) {
    return "Não pode dividir por 0";
  } else {
    return a % b;
  }
}

// 2
function bigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// 3
function bigger_from_three(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

// 4

function positive_negative_zero(a) {
  if (a > 0) {
    return 'positive';
  } else if (a < 0) {
    return 'negative';
  } else {
    return 0;
  }
}

// 5

function triangle(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    return 'Inválido';
  }

  aux = a * b;
  if (aux == (b * c) && aux == (a * c)) {
    return true;
  } else if (aux != (b * c) && aux != (a * c)) {
    return true;
  } else if (aux == (a * c)) {
    return true;
  } else {
    return false;
  }
}


