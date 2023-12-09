let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");

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
    msg.innerText = "It is a Draw";
    msg.style.backgroundColor = "rgb(25, 43, 37)"


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
        showWinner(userwin, userchoice, compChoose)
    }
}

const showWinner = (userwin, userchoice, compChoose) => {
    if(userwin){
        console.log("You Win");
        userScore++;
        userScoreP.innerText = userScore;
        msg.innerText = `Your ${userchoice} beats ${compChoose}`
        msg.style.backgroundColor = "Green"
    }
    else{
        compScore++;
        compScoreP.innerText = compScore;
        msg.innerText = ` ${compChoose} beats Your ${userchoice}`
        console.log("You Lose")
        msg.style.backgroundColor = "Red"

    }
} 

