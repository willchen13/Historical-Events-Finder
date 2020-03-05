import React, { Component } from 'react'
import axios from 'axios';
import Form from './Form.jsx';
import EventList from './EventList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    events: [],
    query: '',
    }
    this.searchEvents = this.searchEvents.bind(this);
  }

  componentDidMount() {
    this.searchEvents('');
  }

  searchEvents(query) {
    console.log('query', query);
    axios.get('/events', {
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
      <React.Fragment>
        <h2> Historical Event Finder</h2>
        <Form searchEvents={this.searchEvents}/>
        <EventList events={this.state.events}/>
      </React.Fragment>
    );
  };

};

export default App;