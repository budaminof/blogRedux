import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr-bud';

class DateComponent extends Component {

  startChange(selectedDate) {
    this.props.onStartDateChange(selectedDate[0]);
  }

  endChange(selectedDate) {
    this.props.onEndDateChange(selectedDate[0]);
  }
  render() {
    return (
      <div style={{'color': 'white'}}>
      <p>START DATE:</p>
      <Flatpickr data-enable-time
        options={{
          altInput: true,
          altFormat: "F j, Y h:i K",
          closeAlways: true,
          maxDate: new Date(Date.now()),
          defaultDate: this.props.defaultStart
        }}
        onChange={(selectedDate) => this.startChange(selectedDate)} />

      <p>END DATE:</p>
      <Flatpickr data-enable-time
        options={{
          altInput: true,
          altFormat: "F j, Y h:i K",
          closeAlways: true,
          maxDate: new Date(Date.now()),
          defaultDate: this.props.defaultEnd
        }}
        onChange={(selectedDate) => this.endChange(selectedDate)} />

      </div>
    )
  }
}

export default DateComponent;
