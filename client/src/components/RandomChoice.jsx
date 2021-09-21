import React from 'react';

// Requires animation for coin flip
class RandomChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      option5: '',
      option6: '',
      showForm: true,
      choice: '',
      options: []
    }
    this.choose = this.choose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, num) {
    this.setState({ [`option${num}`]: e.target.value })
  }

  choose(e) {
    e.preventDefault();
    let optionKeys = Object.keys(this.state);
    for (var i = 5; i >= 0; i--) {
      if (this.state[optionKeys[i]].length) {
        this.state.options.push(this.state[optionKeys[i]]);
      }
    }
    let randomOption = Math.floor(Math.random() * this.state.options.length);
    this.setState({ choice: this.state.options[randomOption], showForm: false });
  }

  render() {
    return (
      this.state.showForm
        ?  <div className='options'>
            <label>Enter your options below and I will choose for you!</label>
            <form>
              <input
                value={this.state.option1}
                onChange={(e) => this.handleChange(e, '1')}
                placeholer="Enter option here"
              />
              <input
                value={this.state.option2}
                onChange={(e) => this.handleChange(e, '2')}
                placeholer="Enter option here"
              />
              <input
                value={this.state.option3}
                onChange={(e) => this.handleChange(e, '3')}
                placeholer="Enter option here"
              />
              <input
                value={this.state.option4}
                onChange={(e) => this.handleChange(e, '4')}
                placeholer="Enter option here"
              />
              <input
                value={this.state.option5}
                onChange={(e) => this.handleChange(e, '5')}
                placeholer="Enter option here"
              />
              <input
                value={this.state.option6}
                onChange={(e) => this.handleChange(e, '6')}
                placeholer="Enter option here"
              />
                <button
                  className='coin'
                  onClick={this.choose}>
                    Click me so you know what you're doing
                  </button>
            </form>
          </div>
        : <div className='final'>{this.state.choice ? this.state.choice : 'Try again'}</div>
    )
  }
}

export default RandomChoice;