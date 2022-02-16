const p = document.getElementsByClassName('square');

const getFromLocalStorage = JSON.parse(localStorage.getItem('person'));
console.log(getFromLocalStorage)

for (let i = 0; i < p.length; i += 1) {
  p[i].addEventListener('click', () => {
    const attr = p[i].getAttribute('class');
    const color = attr.substring(7);
    const fontColor = getFontColor(color);
    saveOnLocalStorage(attr, fontColor);
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
    bodyClass: bgColor,
    fontColor: color, 
  }

  localStorage.setItem('person', JSON.stringify(personal));
}
