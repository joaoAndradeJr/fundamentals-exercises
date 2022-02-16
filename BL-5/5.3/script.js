function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const fridays = [];

function saveFriday() {
  const friday = document.getElementsByClassName('day friday');

  for (let i = 0; i < friday.length; i += 1) {
    fridays.push(friday[i].innerHTML);
  }
}

function createDays() {  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const ulList = document.getElementById('days');
    const day = document.createElement('li');
    day.setAttribute('class', 'day');

    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      day.setAttribute('class', 'day holiday');
    }

    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      day.setAttribute('class', 'day friday');
    }

    day.innerHTML = dezDaysList[i];

    ulList.appendChild(day);
  }
  saveFriday();
}

createDays();

function holidayButtom(str) {
  const holidayBtn = document.createElement('button');
  holidayBtn.setAttribute('id', 'btn-holiday');
  holidayBtn.innerText = str;

  const btnContainer = document.getElementsByClassName('buttons-container')[0];
  
  btnContainer.appendChild(holidayBtn);
}

holidayButtom('Feriados');

function changeHolidayBackground() {
  const btn = document.getElementById('btn-holiday');
  const holidays = document.getElementsByClassName('holiday');

  btn.addEventListener('click', () => {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === 'red') {
        holidays[i].style.backgroundColor = 'rgb(238, 238, 238)';
      } else {
        holidays[i].style.backgroundColor = 'red';
      }
      
    }
  });
}

changeHolidayBackground();

function fridayButtom(str) {
  const holidayBtn = document.createElement('button');
  holidayBtn.setAttribute('id', 'btn-friday');
  holidayBtn.innerText = str;

  const btnContainer = document.getElementsByClassName('buttons-container')[0];
  
  btnContainer.appendChild(holidayBtn);
}

fridayButtom('Sexta-feira');

function changefridayText() {
  const btn = document.getElementById('btn-friday');
  const friday = document.getElementsByClassName('friday');

  btn.addEventListener('click', () => {
    for (let i = 0; i < friday.length; i += 1) {
      if (friday[i].className === 'day friday' && friday[i].innerHTML !== 'Dia de Maldade') {
        friday[i].innerHTML = 'Dia de Maldade';
      } else {
        friday[i].innerHTML = fridays[i];
      }
    }
  });
}

changefridayText();

function createTask(str) {
  const div = document.getElementsByClassName('my-tasks')[0];
  const newTask = document.createElement('span');
  newTask.appendChild(str);

  div.appendChild(newTask);
}
