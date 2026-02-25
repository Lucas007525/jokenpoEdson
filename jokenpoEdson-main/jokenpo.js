function jogar() {

    // Verifica se nenhuma opção foi selecionada
    if (
        document.getElementById('pedra').checked == false &&
        document.getElementById('papel').checked == false &&
        document.getElementById('tesoura').checked == false
    ) {
        alert('Selecione uma opção.');
        return; // para a função aqui
    }

    // Sorteio do computador (0, 1 ou 2)
    let sorteio = Math.floor(Math.random() * 3);

    switch (sorteio) {
        case 0:
            document.getElementById("pc").src = "pcpedra.png";
            break;

        case 1:
            document.getElementById("pc").src = "pcpapel.png";
            break;

        case 2:
            document.getElementById("pc").src = "pctesoura.png";
            break;
    }

    // Verifica empate
    if (
        (document.getElementById("pedra").checked && sorteio == 0) ||
        (document.getElementById("papel").checked && sorteio == 1) ||
        (document.getElementById("tesoura").checked && sorteio == 2)
    ) {
        document.getElementById("placar").innerHTML = "EMPATE!";
    }

    // Jogador vence
    else if (
        (document.getElementById("pedra").checked && sorteio == 2) ||
        (document.getElementById("papel").checked && sorteio == 0) ||
        (document.getElementById("tesoura").checked && sorteio == 1)
    ) {
        document.getElementById("placar").innerHTML = "VOCÊ VENCEU!";
    }

    // Computador vence
    else {
        document.getElementById("placar").innerHTML = "COMPUTADOR VENCEU!";
    }
}
