<?php
require 'paginas/header.php';
require 'classes/usuarios.class.php';

if (isset($_SESSION['Login'])){ 
    $idUsuario = $_SESSION['Login'];
}
?>

<body>
  <div class="desc_filme_fundo">

  </div>
  <div class="conteudo-semelhantes">
    <div class="conteudo-semelhantes-titulo">
      <h1>Veja também semelhantes a esta série</h1><br />
      <section>
        <div class="conteudo-lista-semelhantes">
        </div>
      </section>
    </div>
  </div>


  <script type="text/javascript" src="assets/js/pagina-serie.js"></script>
  <script type="text/javascript" src="assets/js/index.js"></script>
  <?php
require "paginas/footer.php";

if(isset($_SESSION['Login']) ){
    
    $user = new Usuarios();
    $idFilme = $_GET['id'];
    $id_filmes = $user->listarFavoritos($idUsuario)[0];
    $favorito = false;
    $tipo = "tv";

    foreach($id_filmes as $id){
        if(verificarIdFilme($id)){
            $favorito = true;
        break;
        }
    }
    //faz aparecer botao remover favorito
    if ($favorito): ?>
  <script>
  favorito = true;
  meuID = <?= $idUsuario; ?>
  </script>
  <?php endif;

    //faz aparecer botao adicionar favorito
    if (!$favorito): ?>
  <script>
  favorito = false;
  meuID = <?= $idUsuario; ?>
  </script>
  <?php endif;
   
    if (isset($_POST['add'])){

        if(!$user->verificarFavoritos($idFilme, $idUsuario)){
            $user->adicionarFavoritos($idFilme, $idUsuario, $tipo);
        }
    }
    if (isset($_POST['remover'])){

        if($user->verificarFavoritos($idFilme, $idUsuario)){
            $user->removerFavoritos($idFilme,$idUsuario);
        }
    }
    
}
    
    function verificarIdFilme($id){
        $idFilme = $_GET['id'];
        if($id == $idFilme){
            return true;
        }else{
            return false;
        }
    }
?>