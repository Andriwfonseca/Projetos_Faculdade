var meuID;
var favorito;

const gerarFilmes = (id_filme)=>{

    var url = `https://api.themoviedb.org/3/movie/${id_filme}?api_key=0e69076d20c5ace4ad954de6e2df2c18&language=pt-BR`;
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
                if (resposta != null){
                
                    var botaoFavoritos;
                    if(meuID != null){
                        if (!favorito){
                            botaoFavoritos = '<input type="submit" class="botaoFav" onclick="getData()" id="addFavoritos" name="add" value="Adicionar Favoritos" />';
                        }else{
                            botaoFavoritos = '<input type="submit" class="botaoFav" onclick="getData()"  id="removerFavoritos" name="remover" value="Remover Favoritos" />';
                        }
                    }else{
                        botaoFavoritos = "";
                    } 
                    
                    
                    let filme = `
                    <div class="poster_filme" id="poster_filme_id">
                    <img class="poster_filme" src="https://image.tmdb.org/t/p/w300${resposta.poster_path}"></a>
            </div>
            
            <div class="desc_filme" id="desc_filme_id">
                <div class="nome_filme" id="nome_filme_id">
                    <h1 class="nome" dir="auto">
                        <a>${(resposta.title) ? resposta.title : resposta.name }</a>
                        <span class="tag_release_date">(${resposta.release_date.substr(0, 4)})</span>
                    </h1>
                </div>
                <div class="facts">
                    <div class="infos">
                        
                        <span class="release" id="data-filme">
                                ${resposta.release_date.split("-").reverse().join("-")} |
                        </span>
                        <span class="generos" id="genero-filme">
                        ${resposta.genres[0].name} |
                        ${(resposta.genres.length > 1) ? resposta.genres[1].name +" | " : "" }
                        </span>
                        <span class="tempo-filme" id="time-filme">
                            ${resposta.runtime} minutos
                        </span>
                        
                        <div class="percentual" id="percentual=filme">
                        <br>
                            ${resposta.vote_average * 10}% Avaliação do Usuários
                        </div>
                    </div>
    
                    <div class="header-info">
                    <br><br>
                        <div style: font-weight= 600 class="sinopse_filme">
                            <h2 dir="auto">Sinopse</h2>
                        </div>
                    
                        <div class="overview" dir="auto">
                            <p>
                                ${resposta.overview}
                            </p>
                        </div>
                        <div>
                        <div class="page">
                            <p><a  class="botaoFav" href="#media-popup" data-media="//www.youtube.com/embed/YoXa2Pl7Hk0">Ver Trailer</a></p>

                            <div class="popup" id="media-popup">
                            <iframe width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <br>
                        </div>
                        <div id="botaoFavoritos">
                        <form method="POST">
                        ${botaoFavoritos}
                        </form>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div> 
                    `;
                
                let conteudo_listas = document.querySelector(".desc_filme_fundo");
                
                conteudo_listas.innerHTML += filme;
                pegarTrailer(id_filme,true);

                }                 
            }
            
        }
    }

}

const getSimilar = (id_filme)=>{
    var url = `https://api.themoviedb.org/3/movie/${id_filme}/similar?api_key=0e69076d20c5ace4ad954de6e2df2c18&language=pt-BR&page=1`;

    let ajax = new XMLHttpRequest();

    ajax.open("GET",url); //cria a requisicao

    ajax.responseType = "json";

    ajax.send();


    ajax.onreadystatechange = async function() { //chama esse metodo quando nossa requisicao sofre alguma alteracao durante o processamento
        //quando a requisicao for processada, verificamos se ela foi finalizada
        if (ajax.readyState == 4) { //o codigo 4 informa que ela foi finalizada

            if (ajax.status = 200){//o codigo 200 informa que a requisicao obteve sucesso no seu processamento4

                //agora faça alguma coisa
                let resposta = ajax.response.results;
                if (resposta != null){
                    

                    let conteudo_semelhante = document.querySelector(".conteudo-lista-semelhantes");

                    for(let x = 0; x < resposta.length;x++){
                        let conteudoSemelhante = `
                        <div class="lista-semelhantes">
                            <div class="div-imagens">
                            <a href="http://localhost/projetoadiel22-09/info-${(resposta[x].release_date) ? "filme" : "serie"}.php?id=${resposta[x].id}"> <img class="imagem" src="https://image.tmdb.org/t/p/w250_and_h141_face${resposta[x].poster_path}"></a>
                            </div>
                            <div class="div-nome-filme" style="text-align: center;">
                                <h3>${(resposta[x].title) ? resposta[x].title : resposta[x].name } </h3>
                            </div>                   
                        </div>`;

                        conteudo_semelhante.innerHTML += conteudoSemelhante;
                    }
                    

                    
                    
                }       
            }
            
        }
    }

}

const pegarTrailer = (id_filme, br) =>{
    let url = "";

    if(br){
        url = `http://api.themoviedb.org/3/movie/${id_filme}/videos?language=pt-BR&api_key=0e69076d20c5ace4ad954de6e2df2c18`;
    }else{
        url = `http://api.themoviedb.org/3/movie/${id_filme}/videos?api_key=0e69076d20c5ace4ad954de6e2df2c18`;
    }
    
    $.getJSON(url, 
    function(data) {
        console.log(data.results.length)
        if (data.results.length > 0){
            
            id_trailer = data.results[0].key;
            var urlYoutube = "http://www.youtube.com/embed/"+ id_trailer;
    
            //popup youtube
            $("[data-media]").on("click", function(e) {
                e.preventDefault();
                var $this = $(this);
                var videoUrl = $this.attr("data-media");
                console.log(videoUrl)
                var popup = $this.attr("href");
                var $popupIframe = $(popup).find("iframe");
            
                $popupIframe.attr("src", urlYoutube);
            
                $this.closest(".page").addClass("show-popup");
            });
            
            $(".popup").on("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
            
                $(".page").removeClass("show-popup"); //deixa invisivel
                $("iframe").attr("src",""); //stop
            });
            
            $(".popup > iframe").on("click", function(e) {
                e.stopPropagation();
            });
            
            
        }else{
            pegarTrailer(id_filme, false);
        }
    });
}

//pega o id do filme
var url_string = window.location.href;
var url = new URL(url_string);
var id_filme = url.searchParams.get("id");

gerarFilmes(id_filme);
getSimilar(id_filme)

