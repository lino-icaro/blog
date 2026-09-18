function dataHora() {
    const agora = new Date();
    const hora = agora.toLocaleTimeString('pt-BR');

    const relogios = document.querySelectorAll('.relogio-post');

    relogios.forEach(relogio => {
        relogio.innerText = hora;
    });
};

setInterval(dataHora, 1000);
dataHora();
