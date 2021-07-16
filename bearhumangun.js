//like rock paper scisors

//bear mauls human
//human disarms gun
//gun shoots bear 
// = draw 

//1. get the user's choice
//2. get the computer's choice
//3. compare the two choices & determine a winner
//4. start the program & display the results 

//inside the playGame() function
//create a variable named propmtUserChoice
//assign the value of prompt("please choose bear, human or gun")
//pass in prompt UserChoice as an argument to the getUserChoice() & assign to the variable userChoice 

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase(); //users will type all cases possibly 
    if (userInput === 'bear' || userInput === 'human' ||  userInput === 'gun') {
        return userInput; 
    } else {
        return 'Learn to Play the Game, Sucker';
    }
}

//getUserChoice('bear');//for testing the function

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    }
    if (randomNumber === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}

//console.log(getComputerChoice());//this tested the function. May not need this???

function determineWinner (userChoice, computerChoice){
    //compare the two choices played   
    //return if hte human player won, lost or tied
    if (userChoice === computerChoice) {
        return 'its a tie!'
    }
    if (userChoice === 'human'){
        if (computerChoice === 'bear')
        return 'computer won!'
    }

    if (userChoice === 'bear'){
        if (computerChoice === 'gun')
        return 'computer won!'
    } 

    if (userChoice === 'gun'){
        if (computerChoice === 'human')
        return 'you win!'
    } 

    if (userChoice === 'bear'){
        if (computerChoice === 'human')
        return 'you win!'
    } 

    if (userChoice === 'gun'){
        if (computerChoice === 'bear'){
        return 'you win!'
        } 
    }

    if (userChoice === 'human'){
        if (computerchoice === 'gun'){
        return 'computer wins!'
        }
    } else {
        return 'something crazy went down'
    }

//console.log (determineWinner()); //tests function

function playGame(){
    var promptUserChoice = prompt("PLease choose bear, human or gun");
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice); 
    console.log(determineWinner(userChoice, computerChoice));  
}

//To get it to actually show up on the page here people. 

var clickButton = function(){

    document.getElementbyId('computerChoice').innerHTML = `The computer chose ${getComputerChoice}`;

}

document.getElementById('play').addEventListener('click', handleClick);