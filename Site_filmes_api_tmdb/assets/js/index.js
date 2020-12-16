//Pesquisar apertando enter
function apertouEnter(e){
  if (e.keyCode == 13){
    pesquisar();
  }
  
}

$('#busca-realizada').click(function() {
  pesquisar();
  
  });

//Compara qual url esta e vai para pagina de pesquisa
function pesquisar(){
  let url = window.location.pathname.toString();
  let urlPesquisa = "http://localhost/projetoadiel22-09/lista-pesquisa-filme.php";

  let busca = document.getElementById('campo-busca').value;
  //vai para pagina de lista-pesquisa
  //é salvo no localStorage para iniciar a pagina direto com a busca realizada em outras paginas
  if (url == urlPesquisa){
    localStorage.setItem("campoPesquisa",busca);
    mostrarPesquisa();
  }else{
    localStorage.setItem("campoPesquisa",busca);
    window.location.href = "lista-pesquisa-filme.php";
    mostrarPesquisa();
  } 
}

function mostrarPesquisa(){
  let busca = localStorage.getItem("campoPesquisa");
  pesquisarFilme(busca);
}

/*
function juntarPalavra(palavra){

  let array = palavra.split(' ');
  
  let juntar = array.join('');

  return juntar;
}
function verificarBusca(palavra,id){
  //vai verificar se tem a palavra digitada na id
  let resultado = id.includes(palavra);
  return resultado;
}
function esconderDisplay(elemento){
  elemento.style.display = "none";
}
function mostrarDisplay(elemento){
  elemento.style.display = "block";
}
*/