/*Impede o usúario que não tem acesso a entrar*/

/* A função const é nomeada como urlParams, tendo um novo comando URLSearchPArams que le e manipula strings quando 
executado uma consulta em uma URL. Dentro do parenteses informa o que deve ser executado.*/
/*Se (if) der erro ele verifica e executa o alerta*/
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("erro") == 1) {
  alert("E-mail ou senha incorretos. Tente novamente.");
}
