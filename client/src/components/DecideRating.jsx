import React from 'react';
import Selector from './Select.jsx';
import Dropdown from './Dropdown.jsx';

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
    this.setState({ choice: this.state.options[randomOption]});
    this.props.handleChildChange('showRatings', false);
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
          <form>{console.log(this.props)}
            <Dropdown choices={this.props.choices}/>
            <Selector className='nameOption' choices={this.props.choices}/>
            <Dropdown />
            <Selector className='nameOption' />
            <Dropdown />
            <Selector className='nameOption' />
            <Dropdown />
            <Selector className='nameOption' />
            <button
              className='coin'
              onClick={this.process}>
              Lets reveal the best option!
            </button>
          </form>
        </div>
        : <div className='final'>Your best option is Taco Bell</div>
    )
  }
}

export default DecideRating;

// setRating(e) {
//   this.setState({ [e.target.val]: e.target.value })
// }

// render() {
//   return (
//     this.props.showRatings
//       ?
//       <div className='options'>
//         <label>Select and rate each option</label>
//         <form>
//           <Dropdown choices={this.props.choices.state}/>
//           <Selector className='nameOption'  value={this.state.rating1} val='rating1'/>
//           <Dropdown names={this.props.names.state}/>
//           <Selector className='nameOption' onClick={this.setRating} value={this.state.rating2} val='rating1'/>
//           <Dropdown names={this.props.names.state}/>
//           <Selector className='nameOption' onClick={this.setRating} value={this.state.rating3} val='rating1'/>
//           <Dropdown names={this.props.names.state}/>
//           <Selector className='nameOption' onClick={this.setRating} value={this.state.rating4} val='rating1'/>
//           <button
//             className='coin'
//             onClick={this.process}>
//             Lets reveal the best option!
//           </button>
//         </form>
//       </div>
//       : <div className='final'>Your best option is Taco Bell</div>
//   )
// }