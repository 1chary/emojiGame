// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, list, onClickPlayAgain} = props

  const again = () => {
    onClickPlayAgain()
  }

  const url = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const text = isWon ? 'You Won' : 'You Lose'

  const title = isWon ? 'Best Score' : 'Score'

  return (
    <div className="backgroundContainer">
      <div className="scoreCard">
        <img src={url} className="photo" alt = "win or lose"/>
      </div>
      <div className="belowPart">
        <h1 className="winOrLoseText">{text}</h1>
        <p className="scoreTitle">{title}</p>
        <p className="scoreInBlue">
          {score}/{list.length}
        </p>
        <button className="playBtn" type="button" onClick={again}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
