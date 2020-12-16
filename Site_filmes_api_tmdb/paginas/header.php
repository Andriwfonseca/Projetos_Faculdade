<?php
session_start();
?>
<!DOCTYPE html>
<html lang="pt-BR" dir="ltr">

<head>
  <title>FilmesFlix</title>
  <meta charset="Utf-8">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap" rel="stylesheet">
  <link rel="shortcut icon" href="assets/images/favicon2.ico" type="image/x-icon">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="assets/css/style.css">

  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  <script type="text/javascript" src="assets/js/jquery-3.5.1.min.js"></script>
</head>

<body>
  <nav>
    <ul>
      <li class="logo"><a href="index.php">FilmesFlix</a></li>
      <li class="btn"><span class="fas fa-bars"></span></li>
      <div class="items">
        <li><a href="lista-filmes.php">Filmes</a></li>
        <li><a href="lista-series.php">Séries</a></li>
        <?php if(isset($_SESSION['Login']) && !empty($_SESSION['Login']) ): ?>
        <li id="name-user"><a href="perfil.php"><?= $_SESSION['nome']; ?></a></li>
        <li><a href="sair.php">Sair</a></li>
        <?php else: ?>
        <li><a href="cadastre-se.php">Cadastre-se</a></li>
        <li><a href="login.php">Login</a></li>
        <?php endif; ?>
      </div>
      <li class="search-icon">

        <input type="search" id="campo-busca" onkeypress="apertouEnter(event)" autofocus placeholder="Pesquisar...">
        <label class="icon">
          <a href="#" id="busca-realizada">
            <span class="fas fa-search"></span>
          </a>
        </label>

      </li>
    </ul>
  </nav>

  <script>
  $('nav ul li.btn span').click(function() {
    $('nav ul div.items').toggleClass("show");
    $('nav ul li.btn span').toggleClass("show");
  });
  </script>