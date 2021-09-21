import React from 'react';

// Used to update user rating
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5
    }
    this.selected = this.selected.bind('this');
  }

  selected = (e) => {
    e.preventDefault();
    this.setState({ rating: e.target.value })
  }

  render() {
    return (
      <div className='nameOption'>
          <button type="radio" value='1' onClick={this.selected}>1</button>
          <button type="radio" value='2' onClick={this.selected}>2</button>
          <button type="radio" value='3' onClick={this.selected}>3</button>
          <button type="radio" value='4' onClick={this.selected}>4</button>
          <button type="radio" value='5' onClick={this.selected}>5</button>
          <button type="radio" value='6' onClick={this.selected}>6</button>
          <button type="radio" value='7' onClick={this.selected}>7</button>
          <button type="radio" value='8' onClick={this.selected}>8</button>
          <button type="radio" value='9' onClick={this.selected}>9</button>
          <button type="radio" value='10' onClick={this.selected}>10</button>
      </div>
    )
  }
}

export default Select;