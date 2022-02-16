const p = document.getElementsByClassName('square');

for (let i = 0; i < p.length; i += 1) {
  p[i].addEventListener('click', () => {
    const attr = p[i].getAttribute('class');
    const color = attr.substring(7);
    const fontColor = getFontColor(color);
    saveOnLocalStorage(color, fontColor);
    changePageColor(color, fontColor);
  });
}

function changePageColor(bgColor, fontColor) {
  const body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', bgColor);
  body.style.color = fontColor;
}

function getFontColor(color) {
  switch (color) {
  case 'black':
    return 'white';
  default:
    return 'black';
  }
}

function saveOnLocalStorage(bgColor, color) {
  const personal = {
    backGround: bgColor,
    fontColor: color, 
  }

  localStorage.setItem('person', JSON.stringify(personal));
}


// let personal = JSON.parse(localStorage.getItem('person'));

// document.getElementsByClassName('body')[0].style.backgroundColor = personal.backgroundColor;
// document.getElementsByClassName('body')[0].style.color = 'white';
