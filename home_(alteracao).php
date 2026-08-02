<?php

var_dump($_POST);
exit;

session_start();
require_once 'conexao.php';

try {
    //Veirifica se os dados foram enviados via POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if ($_POST['$acao'] === "alterar") {
            $campo = $_POST['alteracao'];
            $novo_valor = $_POST['novo_dado'];
            $id = $SESSION['usuario_id'];

            $permitidos = ['nome_cliente', 'data_nascimento_cliente', 'email_cliente', 'telefone_cliente'];

            if (!in_array($campo, $permitidos)) {
                die("Campo inválido");
            }

            $sql4 = "UPDATE cadastro_cliente SET $campo = :valor WHERE id_cliente = :id";

            $stmt4 = $pdo->prepare($sql4);
            $stmt4->execute([
                ':valor' => $novo_valor,
                ':id' => $id
            ]);
            var_dump("UPDATE executado");
            exit;
        }
    }
    header("Location: home.html");
    exit;
} catch (PDOException $e) {
    die("Erro " . $e->getMessage());
}
