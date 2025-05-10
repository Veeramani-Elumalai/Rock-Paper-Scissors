
let userScore = 0;
let computerScore = 0;  
let lose = false;
    
function play(userChoice){
    if(lose) return

    const choices=["rock","paper","scissors"]
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    document.getElementById('user-choice').textContent = "You chose --" + userChoice
    document.getElementById("computer-choice").textContent = "Computer choose --" + computerChoice
    
    let result =""
    if (userChoice === computerChoice){
        result = "It's a draw!"
    }
    else if ((userChoice == 'rock' && computerChoice == 'scissors') || 
             (userChoice == 'paper' && computerChoice == 'rock') || 
             (userChoice == 'scissors' && computerChoice == 'paper'))
             {
        result = "You win this round!"
        userScore++
             }
    else {
        result = "Computer Wins this round !"
        computerScore++
    }

    document.getElementById('result').textContent = result
    document.getElementById('user-score').textContent = userScore
    document.getElementById('computer-score').textContent = computerScore

    if (userScore === 5 || computerScore === 5){
        lose = true
     
    const winnerText = userScore === 5 ? "😆😆 You Rock Computer Shock !" : "😆😆 Computer Rocked You Shocked !"
    document.getElementById("final-winner").textContent = winnerText

    }
}


function resetGame(){
    userScore = 0
    computerScore = 0
    lose = false

    document.getElementById('user-choice').textContent = ""
    document.getElementById('computer-choice').textContent = ""
    document.getElementById('user-score').textContent = "0"
    document.getElementById('computer-score').textContent = "0"
    document.getElementById('result').textContent = ""
    document.getElementById('final-winner').textContent = ""
}
