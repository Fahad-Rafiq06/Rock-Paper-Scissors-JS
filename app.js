let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScoreP = document.querySelector("#userScore");
const compScoreP = document.querySelector("#compScore");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // console.log(choice)
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})

const compChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    console.log("this is comps choice",options[randIdx])
    return options[randIdx]
}

const drawGame = () => {
    console.log("Draw");
}
const playGame = (userchoice) => {
    let compChoose = compChoice();
    console.log("this is user's choice",userchoice)
    if(userchoice === compChoose){
        drawGame()
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compChoose === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compChoose === "scissors" ? false : true;
        }
        else{
            userwin = compChoose === "paper" ? true : false;
        }
        showWinner(userwin)
    }
}

const showWinner = (userwin) => {
    if(userwin){
        console.log("You Win");
        userScore++;
        userScoreP.innerText = userScore;

    }
    else{
        compScore++;
        compScoreP.innerText = compScore;
        console.log("You Lose")
    }
} 
