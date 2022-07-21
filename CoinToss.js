import {Component} from 'react'

import './index.css'

const coinImage = [
  {
    id: 'HEAD',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    id: 'TAIL',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {
    activeId: coinImage[0].id,
    total: 0,
    head: 0,
    tail: 0,
  }

  UpdateHead = () => {
    this.setState(prevState => ({
      head: prevState.head + 1,
    }))
  }

  UpdateTail = () => {
    this.setState(prevState => ({
      tail: prevState.tail + 1,
    }))
  }

  getImageUrl = () => {
    const {activeId} = this.state
    const imageDetails = coinImage.map(each => each.id === activeId)

    return imageDetails.imageURL
  }

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.updateHead()
    } else {
      this.updateTail()
    }
    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
  }

  render() {
    const {total, head, tail} = this.state
    const {imageURL} = this.getImageUrl()

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageURL} alt="coin" className="coin-image" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickButton}
          >
            Toss Coin
          </button>
          <div className="total-container">
            <p className="total">Total: {total}</p>
            <p className="total">Heads: {head}</p>
            <p className="total">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
