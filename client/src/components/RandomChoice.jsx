import React from 'react';

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
      showForm: true
    }
    this.choose = this.choose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, num) {
    e.preventDefault();
    this.setState({ [`option${num}`]: e.target.value })
  }

  choose() {
    return Math.floor(Math.random() * 6);
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
              <div>
                <button className='coin' placeholder='Lets Gooooo' onClick={this.choose}>Lets Goooooo</button>
              </div>
            </form>
          </div>
        : <div>{ }</div>
    )
  }
}

export default RandomChoice;