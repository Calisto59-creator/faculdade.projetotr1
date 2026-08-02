<?php

require_once 'conexao.php';

try {
    //Veirifica se os dados foram enviados via POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        //Limpa e pega os dados enviados
        $nome = $_POST['nome_cliente'];
        $data_nascimento = $_POST['data_nascimento_cliente'];
        $cpf = $_POST['cpf_cliente'];
        $email = $_POST['email_cliente'];
        $telefone = $_POST['telefone_cliente'];
        $sexo = $_POST['sexo_cliente'];
        $senha = password_hash($_POST['senha_cliente'], PASSWORD_DEFAULT);

        $endereco = $_POST['endereco_cliente'];
        $numero = $_POST['numero_cliente'];
        $cidade = $_POST['cidade_cliente'];
        $cep = $_POST['cep_cliente'];
        $pais = $_POST['pais'];
        $estado = $_POST['estado'];
        $uf = $_POST['uf'];

        if (empty($nome) || empty($data_nascimento) || empty($cpf) || empty($email) || empty($telefone) || empty($senha)) {
            die("Preencha todos os campos obrigatórios.");
        }
        //Comando SQL
        $sql1 = "INSERT INTO cadastro_cliente (nome_cliente, data_nascimento_cliente, cpf, email_cliente, telefone_cliente, sexo, senha) 
    VALUES (:nome_cliente, :data_nascimento_cliente, :cpf, :email, :telefone_cliente, :sexo, :senha)";

        //Prepara a query para execução
        $stmt1 = $pdo->prepare($sql1);
        //Executa com os valores
        $stmt1->execute([
            ':nome' => $nome,
            ':data_nascimento' => $data_nascimento,
            ':cpf' => $cpf,
            ':email' => $email,
            ':telefone' => $telefone,
            ':sexo' => $sexo,
            ':senha' => $senha
        ]);

        //Encontra a Id gerada automaticamento no banco de dados
        $id_cliente = $pdo->lastInsertId();

        if (empty($endereco) || empty($cidade) || empty($cep) || empty($pais) || empty($estado) || empty($uf)) {
            die("Preencha todos os campos obrigatórios.");
        }
        $sql2 = "INSERT INTO endereco_cliente (id_cliente, endereco, numero, cidade, cep, pais, estado, uf) 
     VALUES (:id_cliente, :endereco, :numero, :cidade, :cep, :pais, :estado, :uf)";

        $stmt2 = $pdo->prepare($sql2);
        $stmt2->execute([
            ':id_cliente' => $id_cliente,
            ':endereco' => $endereco,
            ':numero' => $numero,
            ':cidade' => $cidade,
            ':cep' => $cep,
            ':pais' => $pais,
            ':estado' => $estado,
            ':uf' => $uf
        ]);

        header("Location: index.html");
        exit;
    }
} catch (PDOException $e) {
    die("Erro ao salvar os dados. Verifique se os campos foram todos preenchidos.");
}
