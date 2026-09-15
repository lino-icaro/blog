const botoes = decument.querySelectorAll("button");

botoes.forEach(function (butao){
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {

        }
        texto.textContent++;
    }
});