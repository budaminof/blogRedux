import React, { Component } from 'react';
import DateComponent from './date';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(new Date(Date.now()).getTime() - 7 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now())
    }
  }

  startDateChange(date) {
    this.setState({startDate: date})
  }

  endDateChange(date){
    this.setState({endDate: date})
  }

  search() {
    console.log('DATES SEARCH: ', this.state);
    // make call to DB
    if (this.state.endDate < this.state.startDate) {

    } else {

    }
  }


  render() {

    return (
      <div>
      <DateComponent
        defaultStart={ this.state.startDate }
        defaultEnd={ this.state.endDate }
        onStartDateChange={ this.startDateChange.bind(this) }
        onEndDateChange={ this.endDateChange.bind(this) }
         />
        <button onClick={ this.search.bind(this) }>SEARCH FOR DATES</button>
        { this.props.children }
      </div>

    );
  }
}
