
let playerSection = document.querySelector('#playersChoice');
let computerSection = document.querySelector('#computerChoice');
let resultSection = document.querySelector('#result');
let btnsDiv = document.querySelector('div .buttons');
let playAgain = document.querySelector('#playAgain');
let choicesArray = ["ROCK", "PAPER", "SCISSORS"];



// adding choices buttons ==========================
choicesArray.forEach(option => {
    let opt = document.createElement("button");
    btnsDiv.appendChild(opt);
    opt.className = "choices";
    opt.textContent = option;
});


// getting random choice from computer =============
function computer (choicesArray) {
    let randomNum = Math.floor(Math.random() * 3);
    return choicesArray[randomNum];
}


// game logic ======================================
function theWinner (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw!";
    } else if (
        (computerChoice === "ROCK" && playerChoice === "PAPER") ||
        (computerChoice === "PAPER" && playerChoice === "SCISSORS") ||
        (computerChoice === "SCISSORS" && playerChoice === "ROCK")
    ) {
        return "You Won, Congrats!";
    } else {
        return "You lost, sucker!";
    }
}




// buttons functionality ============================
let choiceBtns = document.querySelectorAll('div .buttons button');  

choiceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btnsDiv.style.display = 'none';

        let playerChoice = btn.textContent;
        let computerChoice = computer(choicesArray);

        let playerImg = document.createElement('img');
            playerSection.innerHTML = '<h1>Your Choice</h1>';
            playerSection.appendChild(playerImg);
            playerImg.src = `img/${playerChoice.toLowerCase()}.png`;
            playerImg.classList.add('translateImg');


        let i = 0;
        let id = setInterval(() => {
            let computerImg = document.createElement('img');
            computerSection.innerHTML = '<h1>Computer Choice</h1>';
            computerSection.appendChild(computerImg);
            computerImg.src = `img/${choicesArray[i].toLowerCase()}.png`;
            i++;
            if (i === choicesArray.length) {
            i = 0;
            }
        }, 150);

        setTimeout(() => {
            clearInterval(id);
            
            let computerImg = document.createElement('img');
            computerSection.innerHTML = '<h1>Computer Choice</h1>';
            computerSection.appendChild(computerImg);
            computerImg.src = `img/${computerChoice.toLowerCase()}.png`;

            let resultPara = document.createElement('p');
            resultSection.innerHTML = '';
            resultSection.appendChild(resultPara);
            let result = document.createTextNode(theWinner(playerChoice, computerChoice));
            resultPara.appendChild(result);
            
            if (resultPara.textContent === "You Won, Congrats!") {
                resultPara.style.color = '#01ff01';
                resultPara.classList.add('scale');
            } else if (resultPara.textContent === "You lost, sucker!") {
                resultPara.classList.add('translate');
                resultPara.style.color = 'red';
            } else {
                resultPara.classList.add('rotate');
                resultPara.style.color = 'yellow';
            }
            
            playAgain.style.display = 'block';
        }, 1500);

        
    })
});

playAgain.addEventListener("click", ()=>{
    playAgain.style.display = 'none';
    btnsDiv.style.display = 'block';

    resultSection.innerHTML = '';
})