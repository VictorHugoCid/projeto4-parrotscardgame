
let numCards = Number(prompt("Com quantas cartas você quer jogar?"));
let click = 0
let deck = [
    'imagens/gif/bobrossparrot.gif',
    'imagens/gif/explodyparrot.gif',
    'imagens/gif/fiestaparrot.gif',
    'imagens/gif/metalparrot.gif',
    'imagens/gif/revertitparrot.gif',
    'imagens/gif/tripletsparrot.gif',
    'imagens/gif/unicornparrot.gif'
]
let deckRandom = [];
let limite = 2;

function comparador() {
    return (Math.random() - 0.5)
}

function randomCards() {
    for (let index = 0; index < (numCards / 2); index++) {
        deckRandom.push(deck[index]);
        deckRandom.push(deck[index]);
    }
    deckRandom.sort(comparador)
}

function spreadCards() {
    randomCards();
    const ul = document.querySelector(`.game`);

    /* TENTAR COLOCAR UMA OPÇÃO PARA SE CANCELAR NAO CHAMAR DE NOVO*/ 
    if ((numCards >= 4 && numCards <= 14) && (numCards % 2 == 0)) {
        for (let index = 0; index < numCards; index++) {
            ul.innerHTML += `
                <li class="card" onclick="choose(this)">
                    <div>
                        <img class="front-face "src="imagens/img/parrot.png" >
                    </div>
                    <div>
                        <img class="back-face" src="${deckRandom[index]}">
                    </div>
                </li>`;
        }
    } else if (numCards % 2 !== 0) {
        alert("O número de cartas precisa ser par")
        numCards = prompt("Com quantas cartas você quer jogar?")
        spreadCards();
    } else {
        alert(`Escolha um número entre 4 e 14, inclusive.`);
        numCards = prompt("Com quantas cartas você quer jogar?")
        spreadCards();
    }
}

function choose(element) {
    /*XXXXXX FLIPAR XXXXXXXXX  */
    /* declaração para colocar marcadores na carta selecionada */
    let imageF1, imageT1, imageF2, imageT2, div,li, masterLock;

    /*lista de cartas ímpares viradas*/
    let markerList = document.querySelectorAll(".mark1");
    
    /* controle para nao clicar na carta já selecionada */
    let marker1Lock = element.querySelector("div.lock");

    if (marker1Lock !== null) {
        console.log("nao adianta clicar q vou ficar paradão")
        return;
    }

    masterLock = document.querySelectorAll(".tap-front")
    if (masterLock.length >= limite){
        return
    } 

    if (markerList.length == 0) {
        imageF1 = element.querySelector(".front-face");
        imageT1 = element.querySelector(".back-face");
        // adicionar marcadores:
        //virar carta
        imageF1.classList.add("tap-front","mark1")
        imageT1.classList.add("untap-back")

        //marcar como primeira
        imageT1.classList.add("mark1")

        //marcar a div com lock
        div = imageT1.parentNode
        div.classList.add("lock")

    } else {
        imageF2 = element.querySelector(".front-face");
        imageT2 = element.querySelector(".back-face");
        //tap-front, untap-back, mark1, tlavez lock(ainda resolvendo)
        //virar carta
        imageF2.classList.add("tap-front","mark2")
        imageT2.classList.add("untap-back")
        //marcar como segunda
        imageT2.classList.add("mark2")
        //marcar a div com lock
        div = imageT2.parentNode
        div.classList.add("lock")

    }
    /*contar clicks*/
    click++;
    verify(element);
}

function verify(element) {
    /*ver se tem alguem com marker*/
    let marker1 = document.querySelectorAll(".untap-back.mark1");
    let marker2 = document.querySelectorAll(".untap-back.mark2");

    if (marker1.length == 1 && marker2.length == 1) {
        imageT1 = document.querySelector(".untap-back.mark1");
        imageT2 = element.querySelector(".untap-back.mark2");

        imageF1 = document.querySelector(".tap-front.mark1");
        imageF2 = document.querySelector(".tap-front.mark2");
        if (imageT1.src !== imageT2.src) {
            console.log("Errou feio, errou rude");
            setTimeout(function removerAtributos() {
                /* remover atributos da primeira*/
                imageT1.classList.remove("untap-back","mark1");
                imageF1.classList.remove("tap-front","mark1");

                /* remover atributos da segunda */
                imageT2.classList.remove("untap-back","mark2");
                imageF2.classList.remove("tap-front","mark2");

                /* remover lock */
                imageT1.parentNode.classList.remove("lock");
                imageT2.parentNode.classList.remove("lock");
                
            }, 1000);
        } else {
            console.log("acertô mizeravi");
            /* aumentar limite*/
            limite +=2
            /* remover marcações da primeira*/
            imageT1.classList.remove("mark1");
            imageF1.classList.remove("mark1");

            /* remover marcações da segunda */
            imageT2.classList.remove("mark2");
            imageF2.classList.remove("mark2");

            /* AQUI TEM Q MANTER O LOCK */
            setTimeout(endVerify,500);

        }
    }
}

function endVerify() {
    let tapped = document.querySelectorAll(".tap-front");
    
    if (tapped.length === numCards) {
        if (click === numCards) {
            alert(`Ae, doido!!! terminou com o mínimo de jogadas (${numCards})`);
        } else {
            alert(
                `Finalmente, hein. O mínimo de jogadas é ${numCards} e vc precisou de ${click}, muito fraquinho ainda.`
            );
        }
    }else{
        console.log("ainda nao");
    }
}

spreadCards();
