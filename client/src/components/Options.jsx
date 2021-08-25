import React from 'react';
import CoinFlip from './CoinFlip.jsx';
import DecideRating from './DecideRating.jsx';
import RandomChoice from './RandomChoice.jsx';
import RandomActivity from './RandomActivity.jsx';
import Advice from './Advice.jsx';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decideRating: false,
      showCoinFlip: false,
      showRandomChoice: false,
      showRandomActivity: false,
      showAdvice: false,
      showButtons: true
    }

    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(e) {
    this.setState({ showButtons: false });
    console.log(e.target.value);
    switch (e.target.value) {
      case 'decideRating':
        this.setState({ decideRating: true });
        break;
      case 'showCoinFlip':
        this.setState({ showCoinFlip: true });
        break;
      case 'showRandomChoice':
        this.setState({ showRandomChoice: true });
        break;
      case 'showRandomActivity':
        this.setState({ showRandomActivity: true });
        break;
      case 'showAdvice':
        this.setState({ showAdvice: true });
        break;
      default:
        null;
    }
  }

  render() {
    return (
      <div className='main'>
        <div className='options'>
          {this.state.showRandomChoice && <RandomChoice />}
          {this.state.decideRating && <DecideRating />}
          {this.state.showCoinFlip && <CoinFlip />}
          {this.state.showRandomActivity && <RandomActivity />}
          {this.state.showAdvice && <Advice />}
          {
            this.state.showButtons &&
            (
              <div>
                <button value='decideRating' onClick={this.hideComponent}>I'll help you decide</button>
                <button value='showCoinFlip' onClick={this.hideComponent}>Flip a coin</button>
                <button value='showRandomChoice' onClick={this.hideComponent}>Let us make the choice</button>
                <button value='showRandomActivity' onClick={this.hideComponent}>Bored? Random Activity</button>
                <button value='showAdvice' onClick={this.hideComponent}>Need advice?</button>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Options;