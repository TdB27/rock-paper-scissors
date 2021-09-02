// start game
playerScore = 0

function game() {
  let selectCard = document.querySelectorAll('[data-card]')

  selectCard.forEach(item => {
    item.addEventListener('click', () => {
      const itemCard = item.getAttribute('data-card').toLowerCase()

      let playerSelect = itemCard
      let computerSelect = computerPlay()

      const hiddenTriangle = document.querySelector('.cards-game__bg-triangle')
      const showRound = document.querySelector('.cards-game__round')
      const showWinner = document.querySelector('.cards-game__round__box-winner')

      hiddenTriangle.classList.add('hidden-game')
      showRound.classList.remove('hidden-result')
      showWinner.classList.add('active')

      playRound(playerSelect, computerSelect)
      card(playerSelect, computerSelect)

      console.log("player " + playerSelect)
      console.log("computer " + computerSelect)
      
      let score = document.querySelector('.score')
      score.innerHTML = playerScore
    })
  })
}

// insert the edge and the card to player and computer
function card(player, computer){
  const borderPlayer = document.querySelector('.cards-game__round__game__image.player')
  const cardPlayer = document.querySelector('.cards-game__round__game__image-bg.player')
  if(player === 'paper'){
    borderPlayer.classList.add('picked-paper-border')
    cardPlayer.classList.add('picked-paper-card')
  } else if(player === 'scissors'){
    borderPlayer.classList.add('picked-scissors-border')
    cardPlayer.classList.add('picked-scissors-card')
  } else if(player === 'rock'){
    borderPlayer.classList.add('picked-rock-border')
    cardPlayer.classList.add('picked-rock-card')
  }
  
  const borderComputer = document.querySelector('.cards-game__round__game__image.computer')
  const cardComputer = document.querySelector('.cards-game__round__game__image-bg.computer')
  if(computer === 'paper'){
    borderComputer.classList.add('picked-paper-border')
    cardComputer.classList.add('picked-paper-card')
  } else if(computer === 'scissors'){
    borderComputer.classList.add('picked-scissors-border')
    cardComputer.classList.add('picked-scissors-card')
  } else if(computer === 'rock'){
    borderComputer.classList.add('picked-rock-border')
    cardComputer.classList.add('picked-rock-card')
  }

}

// computer random pick
function computerPlay() {
  let random = ['rock', 'paper', 'scissors']
  return random[Math.floor(Math.random() * 3)].toLowerCase()
}

//
function playRound(playerSelect, computerSelect) {
  if(playerSelect === computerSelect) {
    return console.log("Empate")
  } else if (playerSelect === 'paper'){
    if (computerSelect === 'scissors') {
      return console.log("computer won")
    } else {
      playerScore++
      return console.log("player won")
    }
  } else if (playerSelect === 'scissors'){
    if (computerSelect === 'rock') {
      return console.log("computer won")
    } else {
      playerScore++
      return console.log("player won")
    }
  } else if (playerSelect === 'rock'){
    if (computerSelect === 'paper') {
      return console.log("computer won")
    } else {
      playerScore++
      return console.log("player won")
    }
  }
}

game()

//quando clicar no player add 