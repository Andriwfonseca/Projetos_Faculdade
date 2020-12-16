//Link da api
const lista_terror = "https://api.themoviedb.org/3/discover/movie?with_genres=27&language=pt-BR&api_key=0e69076d20c5ace4ad954de6e2df2c18&page=1";
const lista_acao = "https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR&api_key=0e69076d20c5ace4ad954de6e2df2c18&page=1";
const lista_aventura = "https://api.themoviedb.org/3/discover/movie?with_genres=12&language=pt-BR&api_key=0e69076d20c5ace4ad954de6e2df2c18&page=1";
const lista_comedia = "https://api.themoviedb.org/3/discover/movie?with_genres=35&language=pt-BR&api_key=0e69076d20c5ace4ad954de6e2df2c18&page=1";
const lista_fantasia = "https://api.themoviedb.org/3/discover/movie?with_genres=14&language=pt-BR&api_key=0e69076d20c5ace4ad954de6e2df2c18&page=1";
const lista_originaisNetflix = "https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=0e69076d20c5ace4ad954de6e2df2c18";
const lista_topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=0e69076d20c5ace4ad954de6e2df2c18&language=pt-BR&page=1";
const lista_romance = "https://api.themoviedb.org/3/discover/movie?with_genres=10749&language=pt-BR&api_key=0e69076d20c5ace4ad954de6e2df2c18&page=1"
const lista_popular = "https://api.themoviedb.org/3/trending/all/week?language=pt-BR&api_key=0e69076d20c5ace4ad954de6e2df2c18";

//id da div
const id_aventura = "#list-adventure";
const id_terror = "#list-horror";
const id_acao = "#list-action";
const id_comedia = "#list-comedy";
const id_fantasia = "#list-fantasy";
const id_originaisNetflix = "#original-netflix";
const id_topRated = "#top-rated";
const id_romance = "#list-romance";
const id_popular = "#mais-populares";


const listarFilmes = (lista,id)=>{

    let ajax = new XMLHttpRequest();

    ajax.open("GET",lista); //cria a requisicao

    ajax.responseType = "json";

    ajax.send();


    ajax.onreadystatechange = async function() { //chama esse metodo quando nossa requisicao sofre alguma alteracao durante o processamento
        //quando a requisicao for processada, verificamos se ela foi finalizada
        if (ajax.readyState == 4) { //o codigo 4 informa que ela foi finalizada

            if (ajax.status = 200){//o codigo 200 informa que a requisicao obteve sucesso no seu processamento4

                //agora faça alguma coisa
                let resposta = ajax.response.results;
               
                //document.body.innerHTML += '<li>'+ resposta.title + "<br></li>";
                // document.body.innerHTML += resposta.poster_path + "<br>";
                for(let x = 0;x < resposta.length;x++){
                    
                    let filme = `<div class="lista-filmes" id="${(resposta[x].title) ? resposta[x].title : resposta[x].name }">
                                <div class="div-image">
                                <a href="http://localhost/projetoadiel22-09/info-${(resposta[x].release_date) ? "filme" : "serie"}.php?id=${resposta[x].id}"><img class="image" src="https://image.tmdb.org/t/p/w300${resposta[x].poster_path}"></a>
                                </div><!--div-image--> 
                                <div class="div-nome">
                                <a href="http://localhost/projetoadiel22-09/info-${(resposta[x].release_date) ? "filme" : "serie"}.php?id=${resposta[x].id}"><h4>${(resposta[x].title) ? resposta[x].title : resposta[x].name }</h4></a>
                                </div><!--div-nome--> 
                                </div>`
                let conteudo_listas = document.querySelector(id);
                conteudo_listas.innerHTML += filme;
                }       
            }
            
        }
    }

}





listarFilmes(lista_terror, id_terror);
listarFilmes(lista_acao, id_acao);
listarFilmes(lista_aventura, id_aventura);
listarFilmes(lista_comedia, id_comedia);
listarFilmes(lista_fantasia, id_fantasia);
listarFilmes(lista_originaisNetflix, id_originaisNetflix);
listarFilmes(lista_topRated, id_topRated);
listarFilmes(lista_romance, id_romance);
listarFilmes(lista_popular, id_popular);
