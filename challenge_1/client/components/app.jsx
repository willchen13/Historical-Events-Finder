import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    events: [],
    query: '',
    }
  }
  handleChange(e) {
    e.preventDefault();
    this.searchEvents(this.state.query)
  }

  searchEvents(query) {
    console.log('searching...');
    axios.get('/get', {
        params: {
            q: query,
            _limit: 10,
        }
    })
    .then(response => {
      console.log('data', response.data);
      this.setState({events: response.data});
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    return(
      
    )
  }

}
