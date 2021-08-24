import React from 'react';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    return (
      <div className='main'>
        <div className='pageGreeting'>Lets Make a Decision</div>
        <div className='options'>
          <button>Is it just for you?</button>
          <button>Are you in a group?</button>
          <button>Lets flip a coin</button>
          <button>I'll Make a Random Choice for You</button>
          <button>Bored? Random Activity</button>
        </div>
      </div>
    )
  }
}

export default Options;