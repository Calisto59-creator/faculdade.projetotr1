<?php
$host = 'localhost';
$porta = '5432';
$dbname = 'projeto_cadastro';
$username = 'pr_trabalho';
$password = 'projetot.#2359';

try {
    // Criação da conexão via PDO
    $dsn = "pgsql:host=$host;port=$porta;dbname=$dbname";
    $pdo = new PDO($dsn, $username, $password);

    // Configura o PDO para lançar exceções em caso de erro
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {

    echo "Erro na conexão ou na execução: " . $e->getMessage();
}
