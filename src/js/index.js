var botaoAlteraTema= document.getElementById("botao-alterar-tema")

var body = document.querySelector("body")

var ImagemBotaoTrocaDeTema= document.getElementsByClassName("imagem-botao")[0]


botaoAlteraTema.addEventListener("click", () => {

    var modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    if(modoEscuroEstaAtivo){
        body.classList.remove("modo-escuro")
        ImagemBotaoTrocaDeTema.src ="src/imagens/sun.png"
    } else{
        body.classList.add("modo-escuro")
        ImagemBotaoTrocaDeTema.src ="src/imagens/moon.png"
    }
    
})