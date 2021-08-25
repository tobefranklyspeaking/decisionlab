import React from 'react';
import Selector from './Select.jsx';
import Dropdown from './Dropdown.jsx';
import Names from './Names.jsx';

class DecideRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      rating1: '',
      rating2: '',
      rating3: '',
      rating4: '',
      choice: '',
      options: []
    }
    this.process = this.process.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.select = this.select.bind(this);
  }

  handleChange(e, choice) {
    this.setState({ [choice]: e.target.value })
  }

  process(e) {
    console.log('clicked ------ ', e.target.value)
    e.preventDefault();
    let optionKeys = Object.keys(this.state);
    for (var i = 9; i >= 5; i--) {
      if (this.state[optionKeys[i]].length) {
        this.state.options.push(this.state[optionKeys[i]]);
      }
    }

    //iterate through optionKeys
    //if (this.state)

    let total = 0;
    // let total =
    let randomOption = Math.floor(Math.random() * this.state.options.length);
    this.setState({ choice: this.state.options[randomOption], [this.showRatings]: false });
  }


  getOccurrence() {

  }

  select() {

  }

  render() {
    return (
      this.props.showRatings
        ?
        <div className='options'>
          <label>Select and rate each option</label>
          <form>
            <Dropdown props={this.state} />
            <Selector className='nameOption' />
            <Dropdown />
            <Selector className='nameOption' />
            <Dropdown />
            <Selector className='nameOption' />
            <Dropdown />
            <Selector className='nameOption' />
            <button
              className='coin'
              onClick={this.process}>
              Click me so you know what you're doing
            </button>
          </form>
        </div>
        : <div>Your best option is {console.log(this.props)}</div>
    )
  }
}

export default DecideRating;


{/* <div className='nameOption'>
              <label>2</label>
              <input
                value={this.state.option2}
                onChange={(e) => this.handleChange(e, 'option2')}
                placeholder="Enter option here"
              />
            </div>

<div className='nameOption'>
<label>3</label>
<input
  value={this.state.option3}
  onChange={(e) => this.handleChange(e, 'option3')}
  placeholder="Enter option here"
/>
</div>
            <div className='nameOption'>
            <label>3</label>
            <input
              value={this.state.option3}
              onChange={(e) => this.handleChange(e, 'option3')}
              placeholder="Enter option here"
            />
          </div>

          <div className='nameOption'>
              <label>4</label>
              <input
                value={this.state.option4}
                onChange={(e) => this.handleChange(e, 'option4')}
                placeholder="Enter option here"
              />
            </div>

            <div className='nameOption'>
              <label>5</label>
              <input
                value={this.state.option5}
                onChange={(e) => this.handleChange(e, 'option5')}
                placeholder="Enter option here"
              />
            </div> */}