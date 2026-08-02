<?php
session_start();
require_once "conexao.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM cadastro_cliente WHERE email_cliente = :email";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':email' => $email]);
    $usuario = $stmt->fetch();

    if ($usuario && password_verify($senha, $usuario['senha'])) {

        $_SESSION['logado'] = true;
        $_SESSION['usuario_id'] = $usuario['id_cliente'];

        header("Location: home.html");
        exit;
    } else {
        header("Location: index.html?erro=1");
        exit;
    }
}
