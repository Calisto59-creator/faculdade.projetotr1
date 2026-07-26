/*Esse primeiro código faz com que um campo quando informedo pelo usuario define outros campos informado no código.*/
/*A variaverl "carregarEstados" da o nome para a função "function" que comanda todo o código, fazendo uma tarefa especifica. 
Após o function, é usado a função "let" que é nomeada por duas variaveis "pais_por_estados" e "pais_por_estados_uf" que nelas informamos as strings que interligam com as mesmas string informarmadas no HTML*/
function carregarEstados(x) {
  let pais_por_estados = [
    ["Brasil", "Selecione seu estado"],
    ["Brasil", "Acre"],
    ["Brasil", "Alagoas"],
    ["Brasil", "Amapá"],
    ["Brasil", "Amazonas"],
    ["Brasil", "Bahia"],
    ["Brasil", "Ceará"],
    ["Brasil", "Distrito Federal"],
    ["Brasil", "Espirito Santo"],
    ["Brasil", "Goiás"],
    ["Brasil", "Maranhão"],
    ["Brasil", "Mato Grosso do Sul"],
    ["Brasil", "Mato Grosso"],
    ["Brasil", "Minas Gerais"],
    ["Brasil", "Pará"],
    ["Brasil", "Paraíba"],
    ["Brasil", "Paraná"],
    ["Brasil", "Pernambuco"],
    ["Brasil", "Piauí"],
    ["Brasil", "Rio de Janeiro"],
    ["Brasil", "Rio Grande do Norte"],
    ["Brasil", "Rio Grande do Sul"],
    ["Brasil", "Rondônia"],
    ["Brasil", "Roraima"],
    ["Brasil", "Santa Catarina"],
    ["Brasil", "São Paulo"],
    ["Brasil", "Sergipe"],
    ["Brasil", "Tocantins"],
    ["Argentina", "Selecione sua província"],
    ["Argentina", "Buenos Aires"],
    ["Argentina", "Ciudad Autónoma de Buenos Aires - CABA"],
    ["Argentina", "Catamarca"],
    ["Argentina", "Chaco"],
    ["Argentina", "Chubut"],
    ["Argentina", "Córdoba (Córdova)"],
    ["Argentina", "Corrientes"],
    ["Argentina", "Entre Ríos"],
    ["Argentina", "Formosa"],
    ["Argentina", "Jujuy"],
    ["Argentina", "La Pampa"],
    ["Argentina", "La Rioja"],
    ["Argentina", "Mendoza"],
    ["Argentina", "Misiones"],
    ["Argentina", "Neuquén"],
    ["Argentina", "Río Negro"],
    ["Argentina", "Salta"],
    ["Argentina", "San Juan"],
    ["Argentina", "San Luis"],
    ["Argentina", "Santa Cruz"],
    ["Argentina", "Santa Fé"],
    ["Argentina", "Santiago del Estero"],
    ["Argentina", "Tierra del Fuego"],
    ["Argentina", "Tucumán"]
  ];

  pais_por_estados_uf = [
    ["Brasil", "UF"],
    ["Brasil", "AC"],
    ["Brasil", "AL"],
    ["Brasil", "AP"],
    ["Brasil", "AM"],
    ["Brasil", "BA"],
    ["Brasil", "CE"],
    ["Brasil", "DF"],
    ["Brasil", "ES"],
    ["Brasil", "GO"],
    ["Brasil", "MA"],
    ["Brasil", "MS"],
    ["Brasil", "MT"],
    ["Brasil", "MG"],
    ["Brasil", "PA"],
    ["Brasil", "PB"],
    ["Brasil", "PR"],
    ["Brasil", "PE"],
    ["Brasil", "PI"],
    ["Brasil", "RJ"],
    ["Brasil", "RN"],
    ["Brasil", "RS"],
    ["Brasil", "RO"],
    ["Brasil", "RR"],
    ["Brasil", "SC"],
    ["Brasil", "SP"],
    ["Brasil", "SE"],
    ["Brasil", "TO"],
    ["Argentina", "UF"],
    ["Argentina", "AR-B"],
    ["Argentina", "AR-C"],
    ["Argentina", "AR-K"],
    ["Argentina", "AR-H"],
    ["Argentina", "AR-U"],
    ["Argentina", "AR-X"],
    ["Argentina", "AR-W"],
    ["Argentina", "AR-E"],
    ["Argentina", "AR-P"],
    ["Argentina", "AR-Y"],
    ["Argentina", "AR-L"],
    ["Argentina", "AR-F"],
    ["Argentina", "AR-M"],
    ["Argentina", "AR-N"],
    ["Argentina", "AR-Q"],
    ["Argentina", "AR-R"],
    ["Argentina", "AR-A"],
    ["Argentina", "AR-J"],
    ["Argentina", "AR-D"],
    ["Argentina", "AR-Z"],
    ["Argentina", "AR-S"],
    ["Argentina", "AR-G"],
    ["Argentina", "AR-V"],
    ["Argentina", "AR-T"]
  ];
  /*Na função "var" é nomeada por duas variaveis, "quais_opt_de_pais" e "pais_escolhido". 
No "quais_opt_de_pais" verifica os paises informados no "[]" e no "pais_escolhido" procura no HTML a informação informada na função "value"*/
  var quais_opt_de_pais = [];
  var pais_escolhido = x.value;
  /*Nessa parte faz com que o usuario quando for escolher uma das opções de países, puxe os "estados" que é direcionado ao "pais_por_estados".*/
  /*O "forEach" da dois comandos, um é para strigns e a outra é para número. "If" caso existir essas variáveis, vai interliga as informações conforme informado a cima*/
  pais_por_estados.forEach((item) => {
    if (item[0] == pais_escolhido) {
      quais_opt_de_pais.push(item[1]);
    }
  });
  /*A função "getElementById" procura a variável "(estado)" na função "<option> no HTML e assim que encontrar a função "forEach" puxa as informações "" */
  document.getElementById("estado").innerHTML = "";
  quais_opt_de_pais.forEach((item) => {
    document.getElementById("estado").innerHTML +=
      "<option> " + item + "</option>";
  });
  /*Nessa parte segue o mesmo parametro no de cima, só que com a variável "pais_por_estados_uf" */
  var quais_opt_de_pais = [];
  var pais_escolhido = x.value;
  pais_por_estados_uf.forEach((item) => {
    if (item[0] == pais_escolhido) {
      quais_opt_de_pais.push(item[1]);
    }
  });
  document.getElementById("uf").innerHTML = "";
  quais_opt_de_pais.forEach((item) => {
    document.getElementById("uf").innerHTML += "<option> " + item + "</option>";
  });
}

/*No código abaixo, é para validação das informações colocadas pelo usuário. Para não ocorrer erros na hora que o usuário enviar as informações e coincidir com o que 
foi solicitado.*/
function validarFormulario(formulario) {
  if (!formulario.nome_cliente.value.trim()) {
    alert("O campo Nome não pode ficar vazio.");
    formulario.nome_cliente.focus();
    return false;
  }
  const cpf = formulario.cpf_cliente.value;
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  if (!regexCPF.test(cpf)) {
    alert(
      "O campo CPF precisa ter 14 caracteres, incluindo dois pontos (.) e hífen (-)."
    );
    formulario.cpf_cliente.focus();
    return false;
  }
  //o campo e-mail precisa ser válido, ou seja, deve conter: "@" e "."
  const email = formulario.email_cliente.value;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("O campo E-mail não é válido.");
    formulario.email_cliente.focus();
    return false;
  }
  const data = formulario.data_nascimento_cliente.value;
  if (!data) {
    alert("O campo Data de Nascimento não pode ficar vazio.");
    formulario.data_nascimento_cliente.focus();
    return false;
  }
  //Impede datas futuras
  const hoje = new Date();
  const dataInformada = new Data(data);
  if (dataInformada > hoje) {
    alert("Data de nascimento não permitida, informe uma data válida.");
    return false;
  }
  if (!formulario.sexo.cliente.value) {
    alert("O campo Sexo tem que ser selecionado.");
    formulario.sexo_cliente.focus();
    return false;
  }
  const telefone = formulario.telefone_cliente.value;
  const regexTelefone = /^\(\d{2}\)\s\d{4,5}\-\d{4}$/;
  if (!regexTelefone.test(telefone)) {
    alert(
      "O campo Telefone precisa ter 14 caracteres, inclindo parenteses () e hifén (-)."
    );
    formulario.telefone_cliente.focus();
    return false;
  }
  if (!formulario.cidade_cliente.value.trim()) {
    alert("O campo Cidade não pode ficar vazio.");
    formulario.cidade_cliente.focus();
    return false;
  }
  const cep = formulario.cep_cliente.value;
  const regexCEP = /^\d{5}\-\d{2}$/;
  if (!regexCEP.test(cep)) {
    alert("O campo CEP precisa ter 9 caracteres, incluindo o hífen (-).");
    formulario.cep_cliente.focus();
    return false;
  }
  if (!formulario.pais.value.trim()) {
    alert("O campo País tem que ser selecionado.");
    formulario.pais.focus();
    return false;
  }
  if (!formulario.estado.value.trim()) {
    alert("O campo Estado tem que ser selecionado.");
    formulario.estado.focus();
    return false;
  }
  if (!formulario.uf.value.trim()) {
    alert("O campo UF tem que ser selecionado.");
    formulario.uf.focus();
    return false;
  }
  return true;
}
