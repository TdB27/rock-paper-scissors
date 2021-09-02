// iniciar jogo
playerScore = 0

function game() {
  let selectCard = document.querySelectorAll('[data-card]')

  selectCard.forEach(item => {
    item.addEventListener('click', () => {
      const itemCard = item.getAttribute('data-card').toLowerCase()
      
      let playerSelect = itemCard
      let computerSelect = computerPlay()

      playRound(playerSelect, computerSelect)

      let score = document.querySelector('.score')
      score.innerHTML = playerScore
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
      return console.log("computer won")
    } else {
      playerScore++
      console.log("o score do player é " + playerScore)
      return console.log("player won")
    }
  } else if (playerSelect === 'scissors'){
    if (computerSelect === 'rock') {
      return console.log("computer won")
    } else {
      playerScore++
      console.log("o score do player é " + playerScore)
      return console.log("player won")
    }
  } else if (playerSelect === 'rock'){
    if (computerSelect === 'paper') {
      return console.log("computer won")
    } else {
      playerScore++
      console.log("o score do player é " + playerScore)
      return console.log("player won")
    }
  }
}

game()
