// iniciar jogo
function game() {
  let selectCard = document.querySelectorAll('[data-card]')

  selectCard.forEach(item => {
    item.addEventListener('click', () => {
      const itemCard = item.getAttribute('data-card')

      let playerSelect = itemCard
      let computerSelect = computerPlay()

      playRound(playerSelect, computerSelect)

    })
  })
}

// computer escolhe aleatoriamente
function computerPlay() {
  let random = ['rock', 'paper', 'scissors']
  return random[Math.floor(Math.random() * 3)]
}

function playRound(playerSelect, computerSelect) {
  console.log(`o player escolheu ${playerSelect}`)
  console.log(`o computer escolheu ${computerSelect}`)
}

game()
