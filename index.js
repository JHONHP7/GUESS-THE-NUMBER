let computerNumber
let userNumbers = []
let attemps = 0
let maxguesses = 10

function newGame(){
    window.location.reload()
}

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function compareNumbers(){
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers
if (attemps < maxguesses){
    if (userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is to high! '
            document.getElementById('inputBox').value = ''
            attemps++
            document.getElementById('attempts').innerHTML = attemps
    }
    else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is to low! '
            document.getElementById('inputBox').value = ''
            attemps++
            document.getElementById('attempts').innerHTML = attemps
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Congratulations!!!  '
        attemps++
        document.getElementById('attempts').innerHTML = attemps
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
} else {
    document.getElementById('textOutput').innerHTML = 'You lose! The computer number was: ' + computerNumber
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
}
}