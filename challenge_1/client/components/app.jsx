import React, { Component } from 'react'
import axios from 'axios';
import Form from './Form.jsx';
import EventList from './EventList.jsx';
import ReactPaginate from 'react-paginate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    events: [],
    query: '',
    }
    this.searchEvents = this.searchEvents.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.searchEvents('', 0);
  }

  handlePageClick(e) {
    console.log('page clicked on', e.selected+1);
    this.searchEvents(this.state.lastSearch, e.selected+1);
  }

  searchEvents(query, numPage) {
    console.log('query', query);
    axios.get('/events', {
      params: {
          q: query,
          _page: numPage,
          _limit: 10,
      }
    })
    .then(response => {
      console.log('data', response.data);
      this.setState({events: response.data, query:query});
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    return(
      <React.Fragment>
        <h2> Historical Event Finder</h2>
        <br></br>
        <Form searchEvents={this.searchEvents}/>
        <EventList events={this.state.events}/>
        <ReactPaginate
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          previousLabel={'<='}
          nextLabel={'=>'}
          breakLabel={'.....'}
          onPageChange={this.handlePageClick}/>
      </React.Fragment>
    );
  };

};

export default App;