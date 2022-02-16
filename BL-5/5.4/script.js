let config = {
  backgroundColor: 'blue',
}

localStorage.setItem('person', JSON.stringify(config));

let personal = JSON.parse(localStorage.getItem('person'));

console.log(personal);

document.getElementsByClassName('body')[0].style.backgroundColor = personal.backgroundColor;