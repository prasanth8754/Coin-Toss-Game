import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, lastToss: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        lastToss: tossResult,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        lastToss: tossResult,
      }))
    }
  }

  render() {
    const {heads, tails, lastToss} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1>Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>

          {lastToss === 0 && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          )}
          {lastToss === 1 && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}

          <button type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="result-cont">
            <p>Total: {heads + tails}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
