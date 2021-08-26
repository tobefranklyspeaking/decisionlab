import React from 'react';
import DecideRating from './DecideRating.jsx';

class AddChoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice1: '',
      choice2: '',
      choice3: '',
      choice4: '',
      list: [],
      options: []
    }
    this.submitOptions = this.submitOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, num) {
    this.setState({ [`choice${num}`]: e.target.value })
  }

  submitOptions(e) {
    e.preventDefault();
    let temp = [];
    for (let each in this.state) {
      if (each.includes('choice')) {
        temp.push(each)
      }
    }

    let temp1 = [];
    for (let i = 0; i < temp.length; i++) {
      if (this.state[temp[i]]) {
        temp1.push(this.state[temp[i]]);
      }
    }
    const choiceState = this.props.showChoices;
    let ratingsState = this.props.showRatings;

    this.setState({ 'options': temp1 })
    this.props.handleChildChange('showChoices', false);
    this.props.handleChildChange('showRatings', true);
  }


  render() {
    return (
      this.props.showChoices
        ? <div className='names'>
          <label>Enter your options</label>
          <form>
            <input
              value={this.state.choice1}
              onChange={(e) => this.handleChange(e, '1')}
              placeholder="Enter option here"
            />
            <input
              value={this.state.choice2}
              onChange={(e) => this.handleChange(e, '2')}
              placeholder="Enter option here"
            />
            <input
              value={this.state.choice3}
              onChange={(e) => this.handleChange(e, '3')}
              placeholder="Enter option here"
            />
            <input
              value={this.state.choice4}
              onChange={(e) => this.handleChange(e, '4')}
              placeholder="Enter option here"
            />
            <button
              className='coin'
              onClick={this.submitOptions}>
              Submit options and move onto rankings
            </button>
          </form>
        </div>
        : <DecideRating handleChildChange={this.props.handleChildChange} names={this.props} choices={this.state} showRatings={this.props.showRatings} />
    )
  }
}

export default AddChoices;