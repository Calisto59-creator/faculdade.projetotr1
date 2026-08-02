<?php

$id = $_GET["id"];

require_once 'conexao.php';
$deletar = "DELETE FROM cadastro_cliente WHERE id=$id";

if ($deletar) {
    echo "O registro foi excluido";
} else {
    echo "Infelizmente coitado de você, tente novamente";
}
