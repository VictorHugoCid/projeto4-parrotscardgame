
let numCartas = 14 /* prompt("Com quantas cartas você quer jogar?"); */
spreadCards();
let deck = [];
let deckRandom = [];
cardList();


function cardList() {

    deck = [`imagens/gif/bobrossparrot.gif`,
        `imagens/gif/explodyparrot.gif`,
        `imagens/gif/fiestaparrot.gif`,
        `imagens/gif/metalparrot.gif`,
        `imagens/gif/revertitparrot.gif`,
        `imagens/gif/tripletsparrot.gif`,
        `imagens/gif/unicornparrot.gif`,
    ]

    randomCards();

}

function randomCards() {
    let deckInt = [];
    for (let index = 0; index < (numCartas / 2); index++) {
        //TACAR NO ARRAY
        let random = deck[Math.floor(Math.random() * 6)];
        deckInt[index] = random;

        //ARRANCAR REPETIDOS
        let novaArr = deckInt.filter((este, i) => deckInt.indexOf(este) === i);
        console.log(novaArr); 
    }

    /*     for (let i = 0; i < (numCartas / 2); i++) {
            if (deck[Math.floor(Math.random() * 6)] !== deckInt[i]) {
                console.log(index)
                console.log(i)
                deckInt[i] = deck[Math.floor(Math.random() * 6)]
                console.log(deckInt[index])
                console.log(deckInt[i])
                console.log(deck[Math.floor(Math.random() * 6)])
                break;
    
            }
        } */
    console.log(deckInt);

}

function spreadCards() {
    //XXXXXXXXXXXXXXXXXXXXXXXXXXX
    //FUNCIONANDO BONITINHO
    //XXXXXXXXXXXXXXXXXXXXXXXXXXX
    let carta = document.querySelector("ul")
    let count = 0;
    const ul = document.querySelector(`.game`);

    if ((numCartas >= 4 && numCartas <= 14) && (numCartas % 2 == 0)) {

        for (let index = 0; index < numCartas; index++) {
            ul.innerHTML += `
            <li class="card" onclick="choose(this)">
                <img src="imagens/img/parrot.png" class = "parrot">
            </li>
            `;
            /* <li class="card hidden" >
                <img src="imagens/gif/bobrossparrot.gif" class="gif"></img>
            </li> */

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

function verify() {

}


function choose(element) {

    const carta = element.querySelector("img");

    const dadCarta = carta.parentNode;

    dadCarta.innerHTML = `
    <img src="${deck[Math.floor(Math.random() * 6)]}" class="gif"></img>
    `;

    element.classList.toggle("turn");


    verify();

    //console.log(gif)



    //gif.classList.toggle("hidden")


    //carta.src=  deck[0];

    /* carta.classList.toggle("hidden-gif"); */

    /* cardImage = element.querySelector(".card img")
 
    cardImage.classList.toggle("hidden-img") */

    /* gif = element.querySelector(".card .gif")

    gif.classList.toggle("hidden-gif") */


}

function randomImg() {

}