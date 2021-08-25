import React from 'react';
import DecideRating from './DecideRating.jsx';

class AddChoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      list: [],
      options: []
    }
    this.submitNames = this.submitNames.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, num) {
    this.setState({ [`name${num}`]: e.target.value })
  }

  submitNames(e) {
    e.preventDefault();
    let temp = [];
    for (let each in this.state) {
      if (each.includes('name')) {
        temp.push(each)
      }
    }

    let temp1 = [];
    for (let i = 0; i < temp.length; i++) {
      if (this.state[temp[i]]) {
        temp1.push(this.state[temp[i]]);
      }
    }
    this.setState ({ 'options': temp1 })
    setTimeout(() =>
    this.setState ({ [this.props.showChoices]: false })
    , 250);
    this.setState({ [this.showRatings]: true });
  }


  render() {
    return (
      this.props.showChoices
        ?  <div className='names'>
            <label>Enter your name(s)</label>
            <form>
              <input
                value={this.state.name1}
                onChange={(e) => this.handleChange(e, '1')}
                placeholder="Enter name here"
              />
              <input
                value={this.state.name2}
                onChange={(e) => this.handleChange(e, '2')}
                placeholder="Enter name here"
              />
              <input
                value={this.state.name3}
                onChange={(e) => this.handleChange(e, '3')}
                placeholder="Enter name here"
              />
              <input
                value={this.state.name4}
                onChange={(e) => this.handleChange(e, '4')}
                placeholder="Enter name here"
              />
                <button
                  className='coin'
                  onClick={this.submitNames}>
                    Submit names and move onto rankings
                  </button>
            </form>
          </div>
        : <DecideRating showRatings={this.props.showRatings}/>
    )
  }
}

export default AddChoices;