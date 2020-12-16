
const pesquisarFilme = (filmePesquisado)=>{
    
    const lista_pesquisa = `https://api.themoviedb.org/3/search/movie?api_key=0e69076d20c5ace4ad954de6e2df2c18&language=pt-BR&query=${filmePesquisado}&page=1&include_adult=true`;
    const lista_serie_pesquisa = `https://api.themoviedb.org/3/search/tv?api_key=0e69076d20c5ace4ad954de6e2df2c18&language=pt-BR&query=${filmePesquisado}&page=1&include_adult=false`;
    console.log(lista_pesquisa)
    requisicao(lista_pesquisa);
    requisicao(lista_serie_pesquisa);
    
}

const ordemMaisNovo = (a,b) =>{
    return Date.parse(b.release_date)  - Date.parse(a.release_date);
    
}

const requisicao = (lista)=>{
    let ajax = new XMLHttpRequest();

    ajax.open("GET",lista+1); //cria a requisicao

    ajax.responseType = "json";

    ajax.send();


    ajax.onreadystatechange = async function() { //chama esse metodo quando nossa requisicao sofre alguma alteracao durante o processamento
        //quando a requisicao for processada, verificamos se ela foi finalizada
        if (ajax.readyState == 4) { //o codigo 4 informa que ela foi finalizada

            if (ajax.status = 200){//o codigo 200 informa que a requisicao obteve sucesso no seu processamento4

                //agora faça alguma coisa
                let resposta = ajax.response.results;
                
                let array = resposta.sort(ordemMaisNovo);
                
                for(let x = 0;x < resposta.length;x++){
                   
                    if (resposta[x].poster_path){

                    
                        let filme = `<div class="lista-filmes" id="${(resposta[x].title) ? resposta[x].title : resposta[x].name }">
                                    <div class="div-image">
                                    <a href="http://localhost/projetoadiel22-09/info-${(resposta[x].release_date) ? "filme" : "serie"}.php?id=${resposta[x].id}"><img class="image" src="https://image.tmdb.org/t/p/w300${resposta[x].poster_path}"></a>
                                    </div><!--div-image--> 
                                    <div class="div-nome">
                                    <a href="http://localhost/projetoadiel22-09/info-${(resposta[x].release_date) ? "filme" : "serie"}.php?id=${resposta[x].id}"><h4>${(resposta[x].title) ? resposta[x].title : resposta[x].name }</h4></a>
                                    </div><!--div-nome--> 
                                    </div>`
                    let conteudo_listas = document.querySelector('#lista-pesquisa');
                    
                    conteudo_listas.innerHTML += filme;
                    }
                }       
            }
            
        }
    }
}