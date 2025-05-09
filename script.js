const opts=["Rock","Paper","Scissors"]
userChoice = prompt("Enter Your Choice (Rock,Paper or Scissors): ")


function getcomputerChoice(){
    const ind = Math.floor( Math.random() * opts.length);
    return opts[ind];
}


function getUserChoice(userChoice){
    const computerChoice = getcomputerChoice();
    
    if (userChoice === computerChoice ){
        console.log("It's Draw !");
    }else if(userChoice === "Rock" && computerChoice === "Paper" || 
    userChoice === "Paper" && computerChoice === "Scissors" ||
    userChoice === "Scissors" && computerChoice === "Rock" ) {
        console.log(`Your Choice is ${userChoice}. Computer Choice is ${computerChoice}.`);
        console.log("Computer Won this Round !!");
        computerScore++;
    }else {
        console.log(`Your Choice is ${userChoice}. Computer Choice is ${computerChoice}.`);
        console.log("You won this Round !!");
        userScore++;
    }
}

let userScore = 0;
let computerScore = 0;

function whoWon(){
    if(userScore >= 5){
        console.log("You won the Game !!")
    }else if(computerScore >= 5){
        console.log("Computer won the Game !!")
    }else if(userScore == computerScore){
        console.log("It is a Tie !!")
    }else{
        console.log(`Current Score - You: ${userScore}, Computer: ${computerScore}`);
    }
}


