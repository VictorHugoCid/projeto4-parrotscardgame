
let numCartas = 4 /* prompt("Com quantas cartas você quer jogar?"); */
spreadCards();
let deck = [];

cardList();

function spreadCards(){
    //XXXXXXXXXXXXXXXXXXXXXXXXXXX
    //FUNCIONANDO BONITINHO
    //XXXXXXXXXXXXXXXXXXXXXXXXXXX

    let count = 0;
    const ul = document.querySelector(`.game`);

    if ((numCartas >= 4 && numCartas <= 14 ) && (numCartas%2 == 0)){

        while(count < numCartas){
            ul.innerHTML +=  `
            <li class="card" onclick="choose(this)">
                <img src="imagens/img/front.png" class="imagem">
            </li>`;
    
            count++;
        }

    }else if(numCartas%2 !== 0){
            alert("O número de cartas precisa ser par")
            numCartas = prompt("Com quantas cartas você quer jogar?")
        spreadCards();
    } else {
        alert(`Escolha um número entre 4 e 14, inclusive.`);
        numCartas = prompt("Com quantas cartas você quer jogar?")
        spreadCards();

    } 
}

function cardList(){
    let count = 0;

    while (count < 4) { //LEMBRAR Q TO FIXANDO EM 4 CARTAS
        deck.push(/*FAZER TESTE COM NUMERO*/);
        console.log(deck[count])
        count++

    }
}

function choose(element){
    
    const carta = element.querySelector(".imagem");
    
    carta.src=  deck[0];/* "imagens/gif/bobrossparrot.gif" */


    /* carta.classList.toggle("hidden-gif"); */

    /* carta.innerHTML = `<img src="imagens/gif/bobrossparrot.gif" class="gif"></img>`
    console.log(carta); */
    

    /* card.innerHTML */

    /* cardImage = element.querySelector(".card img")
    console.log(card) 
    cardImage.classList.toggle("hidden-img") */

    /* gif = element.querySelector(".card .gif")
    console.log(gif) 
    gif.classList.toggle("hidden-gif") */


}

function randomImg(){
    
}