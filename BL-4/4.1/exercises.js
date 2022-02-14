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

// 6

function chess_moves(word) {
  lc_word = word.toLowerCase();
  
  switch (lc_word) {
  case 'king':
    return 'Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.';
  case 'queen':
    return 'Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.';
  case 'Rook':
    return 'Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.';
  case 'Bishop':
    return 'Bishops move diagonally any number of squares. They are unable to jump over pieces.';
  case 'Knight':
    return 'Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.';
  case 'Pawn':
    return 'Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.';
  default:
    return 'Invalid';
  }
}

// 7
function score(num) {
  if (num < 0 || num > 100) {
    return 'Inválido';
  }
  if (num >= 90) {
    return 'A';
  } else if (num >= 80) {
    return 'B';
  } else if (num >= 70) {
    return 'C';
  } else if (num >= 60) {
    return 'D';
  } else if (num >= 50) {
    return 'E';
  } else {
    return 'F';
  }
}

// 8
function have_even_number(a, b, c) {
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// 9
function have_odd_number(a, b, c) {
  if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    return true;
  } else {
    return false;
  }
}
