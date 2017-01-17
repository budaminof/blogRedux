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

  dateChange(start, end) {
    console.log("App:", start, end);
    this.setState({
      startDate: start,
      endDate: end
    })
    return this.getData();
  }

  getData() {
    //  call to server for data
    // updates data
  }

  render() {
    return (
      <div>
        <DateComponent
          defaultStart={ this.state.startDate }
          defaultEnd={ this.state.endDate }
          onDateChange={ this.dateChange.bind(this) }
        />
        { this.props.children }
      </div>

    );
  }
}
