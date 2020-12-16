<?php
require "config.php";
class Usuarios{

    public function cadastrar($nome, $senha, $email){
        global $pdo;
        
        //verifica se esse email ja esta cadastrado
        $sql = $pdo->prepare("SELECT id FROM usuarios WHERE email = :email");
        $sql->bindValue(":email", $email);
        $sql->execute();

      
        if($sql->rowCount() == 0){
            
            $sql = $pdo->prepare("INSERT INTO usuarios SET nome = :nome, senha = :senha, email = :email");
            $sql->bindValue(":nome", $nome);
            $sql->bindValue(":senha", md5($senha));
            $sql->bindValue(":email", $email);
            $result = $sql->execute();
           
            return true;
        }else{
            return false;
        }
    }    

    public function login($email, $senha){
        global $pdo;

        $sql = $pdo->prepare("SELECT id, nome FROM usuarios WHERE email = :email AND senha = :senha");
        $sql->bindValue(":email", $email);
        $sql->bindValue(":senha", md5($senha));
        $sql->execute();
        
        //Se existir um usuario com esse email e senha, salva a id dele na sessao
        if($sql->rowCount() > 0){
            $dado = $sql->fetch();
            $_SESSION['Login'] = $dado['id'];
            $_SESSION['nome'] = $dado['nome'];

            return true;
        }else{
            return false;
        }
    }

    public function adicionarFavoritos($idFilme, $idUsuario, $tipo){

        global $pdo;
        
        $sql = $pdo->prepare("INSERT INTO favoritos SET id_filme = :idFilme, id_usuario = :idUsuario, tipo = :tipo");
        $sql->bindValue(":idFilme", $idFilme);
        $sql->bindValue(":idUsuario", $idUsuario);
        $sql->bindValue(":tipo", $tipo);
        $result = $sql->execute();

       
    }

    public function removerFavoritos($idFilme, $idUsuario){

        global $pdo;

        $sql = $pdo->prepare("DELETE FROM favoritos WHERE id_filme = :idFilme AND id_usuario = :idUsuario");
        $sql->bindValue(":idFilme", $idFilme);
        $sql->bindValue(":idUsuario", $idUsuario);
        $result = $sql->execute();
        var_dump($result);
       
    }

    public function listarFavoritos($idUsuario){
        global $pdo;

        $sql = "SELECT * FROM favoritos  WHERE id_usuario = '$idUsuario' ORDER BY id DESC"; 
        $filmes = $pdo->query($sql);  
        
        
        $id_filmes = array();
        $tipo_filmes = array();
        $arrayFavoritos = array();
        
        foreach($filmes as $item){

            array_push($id_filmes, $item['id_filme']);
            array_push($tipo_filmes, $item['tipo']);
        }
        array_push($arrayFavoritos, $id_filmes);
        array_push($arrayFavoritos, $tipo_filmes);

        return $arrayFavoritos;
    }
    
    public function verificarFavoritos($idFilme, $idUsuario){
        global $pdo;

        $sql = $pdo->prepare("SELECT * FROM favoritos WHERE id_usuario = :idUsuario AND id_filme = :idFilme");
        $sql->bindValue(':idUsuario', $idUsuario);
        $sql->bindValue(':idFilme', $idFilme);
        $sql->execute();

        if($sql->rowCount() > 0){
            return true;
        }

    }

}