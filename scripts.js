
let numCartas = 8 /* prompt("Com quantas cartas você quer jogar?"); */
let click = 0
let deck = [
    '/imagens/gif/bobrossparrot.gif',
    '/imagens/gif/explodyparrot.gif',
    '/imagens/gif/fiestaparrot.gif',
    '/imagens/gif/metalparrot.gif',
    '/imagens/gif/revertitparrot.gif',
    '/imagens/gif/tripletsparrot.gif',
    '/imagens/gif/unicornparrot.gif'
]
let deckRandom = [];

/*CHAMAR FUNÇÕES*/
spreadCards();


function comparador() {
    return (Math.random() - 0.5)
}
function randomCards() {
    /* FUNCIONANDO */
    for (let index = 0; index < (numCartas / 2); index++) {
        deckRandom.push(deck[index]);
        deckRandom.push(deck[index]);
    }
    deckRandom.sort(comparador)
}

function spreadCards() {
    /* FUNCIONANDO*/
    randomCards();
    const ul = document.querySelector(`.game`);

    if ((numCartas >= 4 && numCartas <= 14) && (numCartas % 2 == 0)) {
        for (let index = 0; index < numCartas; index++) {
            ul.innerHTML += `
                <li class="card" onclick="choose(this)">
                    <img class="front-face "src="imagens/img/parrot.png" >
                    <img class="back-face" src="${deckRandom[index]}">
                </li>
            `;
        }
    } else if (numCartas % 2 !== 0) {
        alert("O número de cartas precisa ser par")
        numCartas = prompt("Com quantas cartas você quer jogar?")
        spreadCards();
    } else {
        alert(`Escolha um número entre 4 e 14, inclusive.`);
        numCartas = prompt("Com quantas cartas você quer jogar?")
        spreadCards();
    }
}



function choose(element) {
    /*XXXXXX FLIPAR XXXXXXXXX  */

    let markerList = document.querySelectorAll(".markerT1")
    //console.log(markerList)
    let imageF1 = element.querySelector(".card .front-face");
    let imageT1 = element.querySelector(".card .back-face");
    let imageF2 = element.querySelector(".card .front-face");
    let imageT2 = element.querySelector(".card .back-face");

    if (markerList.length == 0) {
        imageF1.classList.add("tap-front-face");
        imageF1.classList.add("markerF1");

        imageT1.classList.add("untap-back-face")
        imageT1.classList.add("markerT1")

    } else {
        imageF2.classList.add("tap-front-face");
        imageF2.classList.add("markerF2");

        imageT2.classList.add("untap-back-face")
        imageT2.classList.add("markerT2")

        verify(element, imageF1, imageT1, imageF2, imageT2);
    }

    /*ADICIONAR DISABLE, PARA O MOUSE NAO CLICAR MAIS EM QUEM ESTÁ ABERTO E COM PAR*/

}


function verify(element, imageF1, imageT1, imageF2, imageT2) {

    /*ver se tem alguem com marker*/
    let marker1 = document.querySelectorAll(".untap-back-face.markerT1")
    let marker2 = document.querySelectorAll(".untap-back-face.markerT2")

    console.log(marker1, marker2)

    //console.log("click")
    if (marker1.length == 1 && marker2.length == 1) {
        console.log("heeeyyyy")
        let firstChoiceFront = document.querySelector(".tap-front-face.markerF1");
        let firstChoiceBack = document.querySelector(".untap-back-face.markerT1");
        let secondChoiceFront = element.querySelector(".tap-front-face.markerF2");
        let secondChoiceBack = element.querySelector(".untap-back-face.markerT2"); 
        


        console.log(firstChoiceFront.src)
        console.log(firstChoiceBack.src)
        console.log(secondChoiceFront.src)
        console.log(secondChoiceBack.src )

        if (firstChoiceBack.src !== secondChoiceBack.src) {

            setTimeout(function removerAtributos() {
                /* remover atributos da primeira*/
                firstChoiceBack.classList.remove("markerT1")
                firstChoiceFront.classList.remove("markerF1")
                firstChoiceBack.classList.remove("untap-back-face")
                firstChoiceFront.classList.remove("tap-front-face")



                /* remover atributos da segunda */
                secondChoiceBack.classList.remove("markerT2")
                secondChoiceFront.classList.remove("markerF2")
                secondChoiceBack.classList.remove("untap-back-face")
                secondChoiceFront.classList.remove("tap-front-face")


            }, 1000);

        } else {
            console.log("acertô mizeravi")
            //remover marker
            firstChoiceBack.classList.remove("markerT1")
            firstChoiceFront.classList.remove("markerF1")

            secondChoiceBack.classList.remove("markerT2")
            secondChoiceFront.classList.remove("markerF2")
            
            //adicionar marcador ".pair"
            //remover ".marker"
            //e deixar aberto 

        }

        //}else {

    }
}