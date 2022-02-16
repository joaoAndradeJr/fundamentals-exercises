let config = {
  backgroundColor: 'black',
  // backgroundColor: 'rgb(243, 243, 174)',
}

localStorage.setItem('person', JSON.stringify(config));

let personal = JSON.parse(localStorage.getItem('person'));

document.getElementsByClassName('body')[0].style.backgroundColor = personal.backgroundColor;
document.getElementsByClassName('body')[0].style.color = 'white';
