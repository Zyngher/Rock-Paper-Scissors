

const options = ['rock', 'paper', 'scissors'];

//Computer Choice
function computerChoice() {
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = options[computerNumber];
    console.log('Computer choice: ' + computerChoice);
    return computerChoice;
}
//User Choice
function userChoice() {
    const userNumber = Math.floor(Math.random() * 3);
    const userChoice = options[userNumber];
    console.log('User choice: ' + userChoice)
    return userChoice;
}


function play(user, computer) {
    if(userChoice === 'rock' && computerChoice === 'paper'){
            console.log('Computer Wins/!');
            return;
        }
     if(userChoice === 'paper' && computerChoice === 'scissors'){
            console.log('Computer Wins/!');
            return;
        }
    if(userChoice === 'rock' && computerChoice === 'scissors'){
            console.log('User Wins/!');
            return;
        }
    if(userChoice === computerChoice){
            console.log('It is a drow/!');
            return;
        }

    
}

userChoice();
computerChoice();
play();














