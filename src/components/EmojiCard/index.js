// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachEmoji, updateUI} = props
  const {emojiUrl, id} = eachEmoji

  const change = () => {
    updateUI(id)
  }

  return (
    <li className="individualContainer">
      <button className="btn" type="button" onClick={change}>
        <img src={emojiUrl} alt="emojiName" className="emojiPhoto" />
      </button>
    </li>
  )
}

export default EmojiCard
