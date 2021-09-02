// iniciar jogo
playerScore = 0
computerScore = 0
match = 0

function game() {
  let selectCard = document.querySelectorAll('[data-card]')

  selectCard.forEach(item => {
    item.addEventListener('click', () => {
      const itemCard = item.getAttribute('data-card').toLowerCase()
      
      let playerSelect = itemCard
      let computerSelect = computerPlay()
      
      /*console.log("o score do player é " + playerScore)
      console.log("o score do computer é " + computerScore) */
      match++
      console.log(match)

      playRound(playerSelect, computerSelect)

    })
  })
}

// computer escolhe aleatoriamente
function computerPlay() {
  let random = ['rock', 'paper', 'scissors']
  return random[Math.floor(Math.random() * 3)].toLowerCase()
}

function playRound(playerSelect, computerSelect) {
  if(playerSelect === computerSelect) {
    return console.log("Empate")
  } else if (playerSelect === 'paper'){
    if (computerSelect === 'scissors') {
      computerScore++
      console.log("o score do computer é " + computerScore)
      return console.log("computer won")
    } else {
      playerScore++
      console.log("o score do player é " + playerScore)
      return console.log("player won")
    }
  } else if (playerSelect === 'scissors'){
    if (computerSelect === 'rock') {
      computerScore++
      console.log("o score do computer é " + computerScore)
      return console.log("computer won")
    } else {
      playerScore++
      console.log("o score do player é " + playerScore)
      return console.log("player won")
    }
  } else if (playerSelect === 'rock'){
    if (computerSelect === 'paper') {
      computerScore++
      console.log("o score do computer é " + computerScore)
      return console.log("computer won")
    } else {
      playerScore++
      console.log("o score do player é " + playerScore)
      return console.log("player won")
    }
  }
}

game()
