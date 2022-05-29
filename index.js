let userScore = 0;
let botScore = 0;
const userScore_span = document.querySelector('#user-score');
const message_h2 = document.querySelector('#message');
const botScore_span = document.querySelector('#bot-score');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function randomBotChoice() {
    const choices = ["r", "p", "s"];
    const rand = Math.floor(Math.random() * 3);
    return  choices[rand];
}

function toWord(word) {
    if (word === r) return "Rock";
    if (word === p) return "Paper";
    else "Scissors";
}

function randomGoodEmojis() {
    goodEmojis = ['🔥', '👍', '😎', '🎉', '🥳']
    rand = Math.floor(Math.random() * 5);
    return goodEmojis[rand];
}

function randomBadEmojis() {
    badEmojis = ['💀', '👎', '😢', '💢', '😭']
    rand = Math.floor(Math.random() * 5);
    return badEmojis[rand];
}

function win() {
 userScore++
 userScore_span.innerHTML = userScore;
 message_h2.innerHTML = `You Won! ${randomGoodEmojis()}`;
 document.querySelector('#message').classList.add('winner');
 document.body.classList.add('winbg');

 setTimeout(function() { document.querySelector('#message').classList.remove('winner')}, 800);

 setTimeout(function() { document.body.classList.remove('winbg')}, 800);
}
function lost() {
 botScore++
 botScore_span.innerHTML = botScore;
 message_h2.innerHTML = `You Lost! ${randomBadEmojis()}`;
 document.querySelector('#message').classList.add('loser');
 document.body.classList.add('losebg');

 setTimeout(function() { document.querySelector('#message').classList.remove('loser')}, 730);

 setTimeout(function() { document.body.classList.remove('losebg')}, 730);
}
function draw() {
 userScore_span.innerHTML = userScore; botScore_span.innerHTML = botScore;
 message_h2.innerHTML = `Draw...`;
 document.querySelector('#message').classList.add('draw');
 document.body.classList.add('drawbg');

 setTimeout(function() { document.querySelector('#message').classList.remove('draw')}, 730);

 setTimeout(function() { document.body.classList.remove('drawbg')}, 730);
}

function theGame(User) {
    const Bot = randomBotChoice();
    switch (User +  Bot) {
        case "rs":
        case "pr":
        case "sp":
            win(User, Bot);
            break;
        case "rp":
        case "ps":
        case "sr":
            lost(User, Bot);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(User, Bot);
            break;
    }
};

function Listeners() {
    rock_div.addEventListener('click', function() {
        theGame('r');
    })
    paper_div.addEventListener('click', function() {
        theGame('p');
    })
    scissors_div.addEventListener('click', function() {
        theGame('s');
    })
};
Listeners();

//sry for many missing assignments :/