// iniciar jogo
function game() {
  let playerSelect = playerPlay()
  let computerSelect = computerPlay()

  // escolher rock, paper or scissors
  function playerPlay(value) {
    while (true) {
      const selectPaper = document.querySelector('#paper')
      const selectScissors = document.querySelector('#scissors')
      const selectRock = document.querySelector('#rock')
      let select = [selectPaper, selectScissors, selectRock]

      let selectCard = document.querySelectorAll('[data-card]')

      selectCard.forEach(item => {
        const itemCard = item.getAttribute('data-card')

        if (itemCard === value) {
          console.log('ok')
        }
      })

      /* selectPaper.addEventListener('click', () => {
        let paper = (selectPaper.value = 'paper'.toLowerCase())
        console.log(paper)
      })

      selectScissors.addEventListener('click', () => {
        let scissors = (selectScissors.value = 'scissors'.toLowerCase())
        console.log(scissors)
      })

      selectRock.addEventListener('click', () => {
        let rock = (selectRock.value = 'rock'.toLowerCase())
        console.log(rock)
      }) */
      return select
      break
    }
  }

  // computer escolhe aleatoriamente
  function computerPlay() {
    let random = ['rock', 'paper', 'scissors']
    return random[Math.floor(Math.random() * 3)]
  }

  // definir quem é o vencedor
  function playRound(playerSelect, computerSelect) {
    console.log(playerSelect)
    if (playerSelect === 'rock') {
      if (computerSelect === 'rock') {
        console.log('Draw')
      } else if (computerSelect === 'paper') {
        console.log('You lose! Paper beats Rock')
      } else {
        console.log('You Gain!! Rock beats Scissors')
      }
    } else if (playerSelect === 'paper') {
      if (computerSelect === 'paper') {
        console.log('Draw')
      } else if (computerSelect === 'scissors') {
        console.log('You lose! Scissors beats Paper')
      } else {
        console.log('You Gain!! Paper beats Rock')
      }
    } else if (playerSelect === 'scissors') {
      if (computerSelect === 'scissors') {
        console.log('Draw')
      } else if (computerSelect === 'rock') {
        console.log('You lose! Rock beats Scissors')
      } else {
        console.log('You Gain!! Scissors beats Paper')
      }
    }
  }
  playRound(playerSelect, computerSelect)
}
game()
