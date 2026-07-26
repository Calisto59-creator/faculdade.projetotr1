
<?php
session_start();

if (!isset($_SESSION['logado'])) {
    header("Location: Home_EscolhaProduto.html");
    exit;
}

require_once 'Conexao.php';

try {
    //Veirifica se os dados foram enviados via POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        //Limpa e pega os dados enviados
        $item_produto = $_POST['item_produto'];
        $descricao = $_POST['descricao'];
        $quantidade = $_POST['quantidade'];
        $valor = $_POST['valor'];

        //SQL correto
        $sql3 = "INSERT INTO produto_cliente (tipo_produto, descricao, quantidade, valor_pretendido) VALUES (:tipo_produto, :descricao, :quantidade, :valor_pretendido)";

        //Prepara a query
        $stmt3 = $pdo->prepare($sql3);
        //Executa com os valores
        $stmt3->execute([
            ':tipo_produto' => $item_produto,
            ':descricao' => $descricao,
            ':quantidade' => $quantidade,
            ':valor_pretendido' => $valor
        ]);
        header("Location: Home_EscolhaProduto.html");
        exit;
    }
} catch (PDOException $e) {
    die("Erro ao salvar os dados. Verifique se os campos foram todos preenchidos.");
}


try {
    //Query de busca (ajuste os nomes das colunas e da tabela conforme seu banco)
    $sql4 = "SELECT id_cliente, nome_cliente, data_nascimento_cliente, email_cliente FROM cadastro_cliente ORDER BY nome_cliente DESC LIMIT 15";
    $stmt4 = $pdo->query($sql4);
    $acessos = $stmt4->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Erro ao buscar dados: " . htmlspecialchars($e->getMessage());
    exit;
}

//Montagem da Tabela HTML
if (count($acessos) > 0) {
    $html = '<table class="table table-hover table-striped">
     <thead>
     <tr> 
     <th>Id</th>
     <th>Nome</th>
     <th>Data de Nascimento</th>
     <th>E-mail</th>
     </tr>
     </thead>
     <tbody>';

    foreach ($acessos as $acesso) {
        $html .= '<tr> 
     <td>' . htmlspecialchars($acesso['id_cliente']) . '</td>
     <td>' . htmlspecialchars($acesso['nome_cliente']) . '</td>
                    <td>' . htmlspecialchars($acesso['data_nascimento_cliente']) . '</td>
                    <td>' . htmlspecialchars($acesso['email_cliente']) . '</td>
                  </tr>';
    }
    $html .= '</tbody></table>';
} else {
    $html = '<div class="alert alert-warning">Nenhum registro de acesso encontrado.</div>';
}
echo $html;

?>
