/**
 * J
 * Jokenpô
 * @author Arthur Garcia Volpini
 * @link https://github.com/volpini13/Jokenpo.git
 * @version 1.0
 */

function jogar() {
    //validação de campos obrigatórios (radio buttom)
    if (document.getElementById('pedra').checked === false && document.getElementById('papel').checked === false && document.getElementById('tesoura').checked === false) {
        alert("Selecione uma opção")

    } else {
        //lógica principal   
        let sorteio = Math.floor(Math.random() * 3) // 0 1 2
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "img/pcpedra.png"
                break
            case 1:
                document.getElementById('pc').src = "img/pcpapel.png"
                break
            case 2:
                document.getElementById('pc').src = "img/pctesoura.png"
                break
        }
        //verificar vencedor ou declarar empate
        if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2)) {
            document.getElementById('placar').innerHTML = "Empate!"


        } else if (((document.getElementById('pedra').checked === true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1))) {
            document.getElementById('placar').innerHTML = "Jogador Venceu!"
        } else {
            document.getElementById('placar').innerHTML = "Computador venceu!"

        }
    }
}

function limpar() {
    document.getElementById('pc').src = "img/pc.png"
    document.getElementById('placar').textContent = '';
}