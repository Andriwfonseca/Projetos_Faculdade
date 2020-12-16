<?php
require "paginas/header.php";
//require "config.php";
        
    require 'classes/usuarios.class.php';
    $user = new Usuarios();
    if(isset($_POST['nome'])){

        $nome = filter_input(INPUT_POST, 'nome');
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        $senha = filter_input(INPUT_POST, 'senha');
        $confirmarSenha = filter_input(INPUT_POST, 'confirme_senha');

        if($nome && $email && $senha && $confirmarSenha){
            if ($senha == $confirmarSenha){
               
                if ($user->cadastrar($nome,$senha,$email)){
                        ?>
<div>
  <script>
  alert("Cadastro realizado com sucesso!")
  </script>
</div>
<?php
                }else{
                        ?>
<div>
  <script>
  alert("Esse usuário ja existe!")
  </script>
</div>
<?php
                    }
            }
?>
<div>
  <script>
  alert("As senhas devem ser iguais!")
  </script>
</div>
<?php            
        }else{
            ?>
<div>
  <script>
  alert("Preencha todos os campos!")
  </script>
</div>
<?php
        }
    }
    ?>

<div class="criar_conta"><br>

  <form method="post">
    <h1>Crie sua Conta</h1><br>
    Nome de usuário<br>
    <input type="text" name="nome" /><br>
    Email<br>
    <input type="email" name="email" /><br>
    Senha (mínimo de 8 caracteres)<br>
    <input type="password" name="senha" /><br>
    Confirme sua senha<br>
    <input type="password" id="confirm_pass" name="confirme_senha" /><br>
    <input type="submit" class="botao" value="Criar conta" name="submit_conta" />
    <button name="cancel-botao" class="botao" onclick="window.location.href='index.php'">Cancelar</button>
  </form>
</div>


</form>
<div class="acima">

</div>
<div id="footer-">
  <?php
require "paginas/footer.php";
?>
</div>
<script type="text/javascript" src="assets/js/index.js"></script>