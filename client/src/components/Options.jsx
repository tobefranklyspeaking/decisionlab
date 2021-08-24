import React from 'react';
import CoinFlip from './CoinFlip.jsx';
import ShowMultiple from './ShowMultiple.jsx';
import RandomChoice from './RandomChoice.jsx';
import RandomActivity from './RandomActivity.jsx';
import Advice from './Advice.jsx';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMultiple: false,
      showCoinFlip: false,
      showRandomChoice: false,
      showRandomActivity: false,
      showAdvice: false
    }

    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(e) {
    e.preventDefault();
    switch (e.target.value) {
      case "showMultiple":
        this.setState({ showMultiple: true });
        break;
      case "showCoinFlip":
        this.setState({ showCoinFlip: true });
        break;
      case "showRandomChoice":
        this.setState({ showRandomChoice: true });
        break;
      case "showRandomActivity":
        this.setState({ showRandomActivity: true });
        break;
      case "showAdvice":
        this.setState({ showAdvice: true });
        break;
      default:
        null;
    }
    console.log(e.target.value, this.state)
  }

  render() {
    return (
      <div className='main'>
        <div className='options'>
          {
            showMultiple
              ? <ShowMultiple />
              : <button value="showMultiple" onClick={this.hideComponent}>I'll help you decide</button>
          }

          {
            showCoinFlip
              ? <CoinFlip />
              : <button value="showCoinFlip" onClick={this.hideComponent}>Let's flip a coin</button>
          }
          {
            showRandomChoice
              ? <RandomChoice/>
              : <button value="showRandomChoice" onClick={this.hideComponent}>Let us make the choice</button>
          }
          {
            showRandomActivity
              ? <RandomActivity/>
              : <button value="showRandomActivity" onClick={this.hideComponent}>Bored? Random Activity</button>
          }
          {
            showAdvice
              ? <Advice/>
              : <button value="showAdvice" onClick={this.hideComponent}>Need advice?</button>
          }
        </div>
      </div>
    )
  }
}

export default Options;