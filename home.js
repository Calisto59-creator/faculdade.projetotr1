document.querySelectorAll("li[data-pagina]").forEach((item) => {
  item.addEventListener("click", function () {
    const pagina = this.getAttribute("data-pagina");
    menus[pagina]();
  });
});

/*Esse código faz com que a página possa acessar os menus sem sair dela mesma*/

/*Colocado o nome "conteudo" na função const e inserindo comando get.ElementById, que seleciona um elemento no código HTML ("conteudo")*/
const conteudo = document.getElementById("conteudo");

/*A variável "pagina" nomeada na função const, liga com a string que é informada, como "home", "produtos", "usuarios" e relatorios.
Assim é interligado com o HTML que tem as mesmas informações na li informada em "data-pagina".*/
/*Tendo essa interligação, consegue utilizar tags HTML sem precisar sair da página.*/
const paginas = {
  home: `
      <h1>Bem-vindo!</h1>
      <p>Aqui você encontra tudo o que precisa para navegar com facilidade e aproveitar ao máximo cada recurso do nosso site. Explore, descubra e personalize sua experiência.</p>
      </br>
      <ul>
      <li><b>Produtos</b></li>
      <p>
      Neste ambiente você pode conhecer melhor os produtos que despertam seu interesse. Informe o tipo, a descrição, a quantidade desejada e até o valor que pretende investir.
      Assim, conseguimos entender suas preferências e oferecer opções que combinam com você.</p>
      
      <li><b>Usuários</b></li>
      <p>
      Quer saber quem já passou por aqui? Nesta seção você encontra informações sobre os usuários que já visitaram o site.
      Se quiser visualizar todos os acessos, basta clicar no texto destacado <strong>“Listagem de Acesso”</strong>.
      </p>
      
      <li><b>Alteração</b></li>
      <p>
      Aqui você tem liberdade para atualizar seus dados sempre que quiser. Nome, e-mail, telefone, data de nascimento — tudo pode ser ajustado de forma simples e rápida, garantindo que seu perfil esteja sempre do jeito que você deseja.
      </p>
      
      <li><b>Exclusão</b></li>
      <p>Caso decida não manter mais sua conta, este é o local para realizar a exclusão. Basta selecionar <strong>“Excluir Conta”</strong> e seu acesso será removido com segurança.</p>
      </ul>
    `,
  produtos: `
      <h1>Conheça nossa Categoria</h1>

       <div class="form-container">
      <p> Gostaria de nos contar o que você procura? </p>
      <br>

      <form action="home2.php" method="POST">
      <input type="hidden" name="acao" value="inserir">

      <label for="item">Tipo de Produto:</label>
      <select id="item_produto" name="item_produto">  
      <option value="">Selecione o produto</option>
      <option value="celular">Celulares</option>
      <option value="televisor">Televisores</option>
      <option value="tablet">Tablets</option>
      <option value="notebook">Notebooks</option>
      <option value="computador">Computadores (CPU)</option>
      <option value="videogame">Videogames</option>
      <option value="leitores">Leitores de E-book</option>
      <option value="acessorios">Acessórios Gerais</option>
      <option value="materiais escritorio">Materiais de Escritório/Estudo</option>
      </select>
      <br><br>

      <label for="descricao">Descrição:</label>
      <input type="text" id="descricao" name="descricao" placeholder="">
      <br> <br>
      <label for="quantidade">Quantidade:</label>
      <input type="number" id="quantidade" name="quantidade" placeholder="">
      <br> <br>
      <label for="valor">Valor Pretendido:</label>
      <input type="number" id="valor" name="valor" placeholder="0,00">
      <br><br>

      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
      <br><br>
        </form>
        </div>

          <div class="container-imagens">
      <img id="imagem" src="./Imagens/Notebook2 (3).png" alt="ImagemNotebook" />
      <img
        id="imagem2"
        src="./Imagens/AcessóriosInf. (3).png"
        alt="ImagemE-book"
      />
      <img
        id="imagem3"
        src="./Imagens/MateriaisEsc. (3).png"
        alt="ImagemMatEscrit"
      />
     </div>
     </div>
    `,
  usuario: `
    <h4>Gerenciamento de Usuário</h4>

      <a href="#" id="btnAcessos">Listagem de Acessos</a>
      
      <div class="modal fade" id="modalAcessos" tabindex="-1" aria-labelledby="modalAcessosLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
      <div class="modal-content">
      <div class="modal-header">
      <h5 class="modal-title" id="modalAcessosLabel">Histórico de Acessos</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div id="conteudoAcessos">
      <div class="text-center">Carregando acessos...</div>
      </div>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
      </div>
      </div>
      </div>
      
    `,
  alteracao: `
     <h1>Alteração de Dados</h1>
   <p>Caso queira alterar alguma informação cadastrada, selecione a opção que queira alterar e informe no campo ao lado o novo dado, em seguida aperte "alterar".</p>
   <br>
     <form action="home_(alteracao).php" method="POST">  
     <input type="hidden" name="acao" value="alterar">

     <label for="alteracao">Alteração:</label>
            <select id="alteracao" name="alteracao">
              <option value="">Selecione o dado quer que seja alterado</option>
              <option value="nome_cliente">Nome</option>
              <option value="data_nascimento_cliente">Data de Nascimento</option>
              <option value="email_cliente">E-mail</option>
              <option value="telefone_cliente">Telefone</option>  
              </select>
              <br><br>

          <label for="novo_dado">Novo Dado:</label>
      <input type="text" id="novo_dado" name="novo_dado">
      
        <button type="submit">Alterar</button>

        </form>
        <br><br>

    <p>Alteração será realizada com sucesso.</p> 

   `,
  exclusao: `
  <div class="excluir">
    <p>Este menu permite que você solicite a exclusão permanente da sua conta e de todos os dados associados ao seu cadastro. Ao confirmar a exclusão, seu acesso será encerrado
    e não será possível recuperar as informações posteriormente. Caso tenha certeza de que deseja prosseguir, clique no botão abaixo.</p>

    <button> <a href="home_(exclusao).php?id=$id">Excluir</a> </button>
</div>
  `
};
/*Nessa parte o query.SelectorAll seleciona o direcionamento que é informado no (), que é um estilo CSS, para que não modifique a página.*/
/*No forEach, informado no (), pega o link da página e em seguida abre o comando que verifica o menu (li) e tenta encontrar as strings, fazendo quando o usuário clicar
em um dos menus, vá para a aba que o usuário desejar.*/
document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // preventDefault impede recarregar a página

    /*É informado onde a variável se encontra, para realizar os comandos das váriaveis "conteudo" e "pagina no JS. Resumindo, liga com o código HTML"*/
    const pagina = this.dataset.pagina;
    conteudo.innerHTML = paginas[pagina];
  });
});

//Criando um modal que informa a Listagem de Acesso
function carregarMenu(usuario) {
  document.getElementById("conteudo").innerHTML = paginas[usuario];

  if (usuario === "usuario") {
    const modalEl = document.getElementById("modalAcessos");
    const modalAcessos = new bootstrap.Modal(modalEl);

    document.getElementById("btnAcessos").addEventListener("click", () => {
      modalAcessos.show();
    });

    modalEl.addEventListener("show.bs.modal", function () {
      //Reseta o texto pra "carregando" toda vez que abre
      document.getElementById("conteudoAcessos").innerHTML =
        '<div class="text-center"><div class="spinner-border text-primary" role="status"></div><br>Buscando dados...</div>';

      //Faz a requisição assincrina para PHP
      fetch("home2.php")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro na rede ou arquivo não encontrado");
          }
          return response.text();
        })
        .then((data) => {
          // Insere a tabela gerada pelo PHP dentro da janela modal
          document.getElementById("conteudoAcessos").innerHTML = data;
        })
        .catch((error) => {
          document.getElementById("conteudoAcessos").innerHTML =
            '<div class="alert alert-danger">Erro ao carregar a listagem.</div>';
          console.error("Detalhes do erro:", error);
        });
    });
  }
}

//Faz com que quando o usuário logar, aparecerá o nome dele no cabeçalho da página
const nomeSalvo = localStorage.getItem("nomeUsuario");

if (nomeSalvo) {
  document.getElementById("nome_cliente").innerHTML = nomeSalvo;
}
