const gerarFilmes = (id_filme, tipo)=>{

    var url = `https://api.themoviedb.org/3/${tipo}/${id_filme}?api_key=0e69076d20c5ace4ad954de6e2df2c18&language=pt-BR`;
    let ajax = new XMLHttpRequest();

    ajax.open("GET",url); //cria a requisicao

    ajax.responseType = "json";

    ajax.send();


    ajax.onreadystatechange = async function() { //chama esse metodo quando nossa requisicao sofre alguma alteracao durante o processamento
        //quando a requisicao for processada, verificamos se ela foi finalizada
        if (ajax.readyState == 4) { //o codigo 4 informa que ela foi finalizada

            if (ajax.status = 200){//o codigo 200 informa que a requisicao obteve sucesso no seu processamento4

                //agora faça alguma coisa
                let resposta = ajax.response;
        
                if(resposta){
                    console.log("ID: "+id_filme)
                    console.log(resposta)
                    let filme = `<div class="lista-filmes" id="${(resposta.title) ? resposta.title : resposta.name }">
                                <div class="div-image">
                                    <a href="http://localhost/projetoadiel22-09/info-${(resposta.release_date) ? "filme" : "serie"}.php?id=${resposta.id}"><img class="image" src="https://image.tmdb.org/t/p/w300${resposta.poster_path}"></a>
                                </div><!--div-image--> 
                                <div class="div-nome">
                                    <a href="http://localhost/projetoadiel22-09/info-${(resposta.release_date) ? "filme" : "serie"}.php?id=${resposta.id}"><h4>${(resposta.title) ? resposta.title : resposta.name }</h4></a>
                                </div><!--div-nome--> 
                                </div>`;
                    let conteudo_listas = document.querySelector('#todos-filmes');
                    
                    conteudo_listas.innerHTML += filme;
                    
                }       
            }
            
        }
    }

}

if (id_filmes){
 
    var array_filmes = id_filmes.split("|");
    var array_tipo = tipo.split("|");

    for (let i in array_filmes){
        console.log(array_filmes[i])
        gerarFilmes(array_filmes[i], array_tipo[i]);
    }

}