let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

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
}