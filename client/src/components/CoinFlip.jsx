import React from 'react';

class CoinFlip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideShowing: null
    }


  }

  coinFlip() {
    let option = Math.floor(Math.random() * 2) === 0;
    if (option) {
      this.setState({ sideShowing: 'heads' })
    } else {
      this.setState({ sideShowing: 'tails' })
    }
  }

  render() {
    return (
      <div>
        {Math.floor(Math.random() * 2) === 0
          ? <div className='fadeIn'>Heads</div>
          : <div className='fadeIn'>Tails</div>
        }
      </div>
    )
  }
}

export default CoinFlip;