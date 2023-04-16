import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, isTossed: 0}

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState({isTossed: tossResult})

    if (tossResult === 0) {
      this.setState(prevHeads => ({heads: prevHeads.heads + 1}))
    } else {
      this.setState(prevTails => ({tails: prevTails.tails + 1}))
    }
  }

  render() {
    const {heads, tails, isTossed} = this.state
    const imgUrl =
      isTossed === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="para"> Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="img" />
          <button className="btn" type="button" onClick={this.onClickToss}>
            {' '}
            Toss Coin{' '}
          </button>
          <div className="result-container">
            <p className="result"> Total: {heads + tails} </p>
            <p className="result"> Heads: {heads} </p>
            <p className="result"> Tails: {tails} </p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
