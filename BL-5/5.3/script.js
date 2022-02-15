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
