/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojiList: [], topScore: 0, isGameInProgress: true}

  updateUI = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const clickedEmojiListLength = clickedEmojiList.length
    const isEmojiPresent = clickedEmojiList.includes(id)
    if (isEmojiPresent) {
      // when the id is present finishTheGameAndSetupTopScore
      this.finishTheGameAndSetupTopScore(clickedEmojiListLength)
    } else {
      // if all emoji are clicked exactly once then emojiList length will be equal to clickedEmojiListLength
      if (emojisList.length - 1 === clickedEmojiListLength) {
        this.finishTheGameAndSetupTopScore(clickedEmojiListLength)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameInProgress: true})
  }

  finishTheGameAndSetupTopScore(currentScore) {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = clickedEmojiList.length === emojisList.length

    return (
      <div>
        <WinOrLoseCard
          isWon={isWon}
          score={clickedEmojiList.length}
          onClickPlayAgain={this.resetGame}
          list={emojisList}
        />
      </div>
    )
  }

  renderEmojiList = () => {
    const {emojisList} = this.props
    const shuffledList = emojisList.sort(() => Math.random() - 0.5)
    return (
      <div className="appContainer">
        <ul className="miniAppContainer">
          {shuffledList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              eachEmoji={eachEmoji}
              updateUI={this.updateUI}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {clickedEmojiList, isGameInProgress, topScore} = this.state
    return (
      <>
        <div>
          <NavBar
            imageUrl="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            topScore={topScore}
            score={clickedEmojiList.length}
          />
        </div>
        <div className="onlyBackground">
          {isGameInProgress ? this.renderEmojiList() : this.renderWinOrLose()}
        </div>
      </>
    )
  }
}

export default EmojiGame
