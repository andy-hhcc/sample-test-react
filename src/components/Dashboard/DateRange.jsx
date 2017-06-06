import React, {Component} from 'react';
import {EasyCalendar} from '../DatePickerField/EasyDatePicker.component';
import moment from 'moment';


let formattedToday = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; // January is 0
  let year = today.getFullYear();

  if (day < 10) {
    day = '0' + day
  }
  if (month < 10) {
    month = '0' + month
  }
  return month + '/' + day + '/' + year;
};

export default class DateRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStartDatePicker: false,
      showEndDatePicker: false,
      startDate: formattedToday(),
      endDate: formattedToday(),
    }
  }

  changeStartDate(value) {
    this.setState({
      startDate: moment(value).format('MM/DD/YYYY'),
      showStartDatePicker: false
    });
  }

  changeEndDate(value) {
    this.setState({
      endDate: moment(value).format('MM/DD/YYYY'),
      showEndDatePicker: false
    });
  }

  showStartDatePicker() {
    this.setState({
      showStartDatePicker: !this.state.showStartDatePicker,
      showEndDatePicker: false
    })
  }

  showEndDatePicker() {
    this.setState({
      showEndDatePicker: !this.state.showEndDatePicker,
      showStartDatePicker: false
    })
  }

  render() {
    const {startDate, endDate, showStartDatePicker, showEndDatePicker} = this.state;

    let format = 'MM/DD/YYYY';


    let theme = {
      Calendar: {
        width: "300px",
        position: "absolute",
        zIndex: "9999",
      },
      Day: {fontSize: "15px", fontWeight: "300"},
      DayHover: {
        background: "#ffffff",
        color: "#7f8c8d",
        transform: "scale(1.1) translateY(-10%)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)"
      },
      MonthAndYear: {color: "#535353", fontSize: "18px", fontWeight: "700", lineHeight: "18px"},
      MonthButton: {background: "#fff"}
    }

    let dateStartProps = {
      style: {display: showStartDatePicker ? "block" : "none"},
      date: formattedToday(),
      onChange: ::this.changeStartDate,
      format: format,
      theme: theme
    };

    let dateEndProps = {
      style: {display: showEndDatePicker ? "block" : "none"},
      date: formattedToday(),
      onChange: ::this.changeEndDate,
      format: format,
      theme: theme
    };

    return (
      <div className="date-range">
        <div className="from">
          <div>From</div>
          <div className="range-content">
            <input type="text" value={startDate} className="form-control" onClick={::this.showStartDatePicker}/>
            <div className="square-grey inline-block" onClick={::this.showStartDatePicker}></div>
          </div>
          <EasyCalendar {...dateStartProps}/>

        </div>
        <div className="to">
          <div>To</div>
          <div className="range-content">
            <input type="text" value={endDate} className="form-control" onClick={::this.showEndDatePicker}/>
            <div className="square-grey inline-block" onClick={::this.showEndDatePicker}></div>
          </div>
          <EasyCalendar {...dateEndProps}/>
        </div>
      </div>
    );
  }
}


