<?php
require "paginas/header.php";
require 'classes/usuarios.class.php';
//require 'config.php';

$user = new Usuarios();
if(isset($_POST['email'])){

    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $senha = filter_input(INPUT_POST, 'senha');

    if($email && $senha){
       if($user->login($email, $senha)){
        ?>
<script type="text/javascript">
window.location.href = "./";
</script>
<?php
       }else{
           ?>
<div>
  <script>
  alert("Email e/ou senha incorretos!")
  </script>
</div>
<?php
        }
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
<form method="post">
  <div class="entrar-conta" id="login-conta"><br>
    <h1>Entre com sua Conta</h1><br>
    E-mail<br>
    <input type="email" name="email"><br>
    Senha<br>
    <input type="password" id="senha_user" name="senha"><br>
    <input type="submit" class="botao" value="Entrar" name="submit_conta" />
    <button name="cancel_botao" class="botao" onclick="window.location.href='index.php'">Cancelar</button>
  </div>
  <div id="footer-">
</form>
<script type="text/javascript" src="assets/js/index.js"></script>
<?php
require "paginas/footer.php";
?>
</div>