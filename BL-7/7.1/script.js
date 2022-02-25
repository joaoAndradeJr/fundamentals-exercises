let label = document.querySelector('#clicks');
label.value = 0;

const button = document.getElementById('counter');
button.addEventListener('click', () => {
  const actual = Number(label.value);
  label.value = actual + 1;
});
