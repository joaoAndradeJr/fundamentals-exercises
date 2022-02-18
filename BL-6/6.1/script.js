const estados = [
  'Selecione', 'Acre', 'Alagoas','Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías',
  'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
  'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo',
  'Sergipe', 'Tocantins'
];

estados.forEach((estado) => {
  const selectEstados = document.getElementById('estados');
  const option = document.createElement('option');
  option.setAttribute('value', estado);
  option.innerHTML = estado;
  selectEstados.appendChild(option);
});

const btnEnviar = document.getElementById('btn-enviar');
btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  const estado = document.getElementById('estados');
  console.log(estado.value)
});
