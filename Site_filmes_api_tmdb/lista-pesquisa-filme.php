<?php
require 'paginas/header.php'
?>
<div id="div-conteudo" class="conteudo-os-mais-populares-filmes" style="min-height: 400px">
  <div class="conteudo-populares-titulo">
    <h1>Resultados da Pesquisa:</h1>
    <section>
      <div class="conteudo-listas-filmes" id="lista-pesquisa">

      </div>
      <!--conteudo-listas-filmes-->
    </section>
  </div>
  <!--conteudo-populares-titulo-->
</div>
<!--conteudo-os-mais-populares-filmes-->

<script type="text/javascript" src="assets/js/lista-pesquisa-filme.js"></script>
<script type="text/javascript" src="assets/js/index.js"></script>
<script type="text/javascript" src="assets/js/loadStorage.js"></script>
<?php
require "paginas/footer.php";
?>