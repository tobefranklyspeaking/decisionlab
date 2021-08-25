import React from 'react';
import axios from 'axios';

class RandomActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      isMounted: false
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    console.log(this.state.activity)
  }

  getData() {
    axios.get('/api/activity')
    .then(response => {
      this.setState({
        activity: response,
        isMounted: true
      });
    })
    .catch(err => console.log(err))
  }

  render() {
      return (
        <div>
        {
          this.state.activity
            && <div>{this.state.activity.data}</div>
        }
      </div>
    )
  }
}

export default RandomActivity;