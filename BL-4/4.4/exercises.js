let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// Bem-vinda, Margarida
function print_name() {
  console.log('Bem-vinda, ' + info.personagem);
}

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
/* {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
} */
function add_key_and_value(key, value) {
  info[key] = value;
  
  console.log(info);
}

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
/*
personagem
origem
nota
*/
function show_keys() {
  for (key in info) {
    console.log(key);
  }
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
/*
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
*/
function show_values() {
  for (values in info) {
    console.log(info[values]);
  }
}

/*
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
*/
function new_object() {
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
  };

  for (value in info) {
    console.log(info[value] + ' e ' + info2[value]);
  }
}

new_object()
