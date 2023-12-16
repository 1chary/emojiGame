// Write your code here.
import './index.css'

const NavBar = props => {
  const {imageUrl, alt, score, topScore,isGameInProgress} = props
  return (
    <div className="navBarContainer">
      <div className="emojiImageWithText">
        <img src={imageUrl} alt={alt} />
        <h1 className="headingText">Emoji Game</h1>
      </div>

      {isGameInProgress && (
        <div className="scoreContainer">
          <p className="para">Score: {score}</p>
          <p className="para">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
