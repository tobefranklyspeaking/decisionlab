import React from 'react';

class Names extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      showForm: true,
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
    this.state.options = Object.keys(this.state).filter(word => {
      console.log(word);
      word.length && word.includes('name')

    });

    // for (var i = 3; i > 0; i--) {
    //   console.log(this.state.options[i])

    //   if (this.state.options[i] && this.state.options[i].length) {
    //     this.state.list.push(this.state.options[i]);
    //   }
    // }
    // console.log(this.state.list);
    // axios.post('/names', {
    //   body: {
    //     name1:
    //   }
    // })
  }


  render() {
    return (
      this.state.showForm
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
        : <div>{this.state.choice ? this.state.choice : 'Try again'}</div>
    )
  }
}

export default Names;