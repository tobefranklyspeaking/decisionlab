import React from 'react';
import axios from 'axios';
import Options from './Options.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeVisible: true,
    };

    this.toggleWelcomeVisible = this.toggleWelcomeVisible.bind(this);
  }

  toggleWelcomeVisible() {
    this.setState({ welcomeVisible: false });
  }

  render() {
    return (
      <div id='nav' className='.fadeIn'>
        {
          this.state.welcomeVisible
          ? <button onClick={this.toggleWelcomeVisible}>Welcome, lets make some decisions</button>
          : <Options/>
        }

      </div>
    )
  }
}

export default App;