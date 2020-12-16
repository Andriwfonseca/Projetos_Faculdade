<?php
require "paginas/header.php";
require 'classes/usuarios.class.php';

if (isset($_SESSION['Login'])){
    $idUsuario = $_SESSION['Login'];

    $user = new Usuarios();
    $arrayFavoritos = $user->listarFavoritos($idUsuario);
    
    $string_id_filmes = implode("|", $arrayFavoritos[0]);
    $string_tipo_filmes = implode("|", $arrayFavoritos[1]);

}
?>

<div class="conteudo-os-mais-populares">
  <div class="conteudo-populares-titulo">
    <h1>Favoritos</h1>
    <section>
      <div class="conteudo-listas-filmes" id="todos-filmes">

      </div>
      <!--conteudo-listas-->
    </section>
  </div>
  <!--conteudo-populares-titulo-->
</div>
<!--conteudo-os-mais-populares-->
<script>
var id_filmes = "<?= $string_id_filmes; ?>"
var tipo = "<?= $string_tipo_filmes ?>"
</script>

<script type="text/javascript" src="assets/js/favoritos.js"></script>
<script type="text/javascript" src="assets/js/index.js"></script>
<?php
require 'paginas/footer.php';
?>