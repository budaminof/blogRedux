import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr-bud';

class DateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: this.props.defaultStart,
      endDate: this.props.defaultEnd
    }
  }

  onChangeStart(selectedDates, dateStr, instance) {
    this.setState({startDate: selectedDates[0]});
  }

  onChangeEnd(selectedDates, dateStr, instance) {
    this.setState({endDate: selectedDates[0]});
  }

  dateChange(e) {
    e.preventDefault();
    this.props.onDateChange(this.state.startDate, this.state.endDate);
  }

  render() {
    return (
      <div style={{'paddingTop': '300px'}}>
      <form onSubmit={this.dateChange.bind(this)}>
      <p>START DATE:</p>
        <Flatpickr data-enable-time
          options={{
            altInput: true,
	          altFormat: "F j, Y h:i K",
            closeAlways: true,
            allowInput: true,
            maxDate: this.state.endDate,
          }}
          value={this.state.startDate}
          onChange={(selectedDates, dateStr, instance) => this.onChangeStart(selectedDates, dateStr, instance)} />

      <p>END DATE:</p>
        <Flatpickr data-enable-time
          options={{
            altInput: true,
            altFormat: "F j, Y h:i K",
            closeAlways: true,
            allowInput: true,
            maxDate: new Date(Date.now()),
          }}
          value={this.state.endDate}
          onChange={(selectedDates, dateStr, instance) => this.onChangeEnd(selectedDates, dateStr, instance)} />
          <br/>
          <input type="submit" value="SEARCH"/>
        </form>
      </div>
    )
  }
}

export default DateComponent;
