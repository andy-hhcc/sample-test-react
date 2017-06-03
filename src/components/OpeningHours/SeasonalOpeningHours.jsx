import React, {Component} from 'react';

export default class SeasonalOpeningHours extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {startDate, times} = this.props.data;
    return (
      <div className="normal seasonal">
        <div className="head-title">
          Seasonal Opening Hours
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6">{startDate}</div>
          <div className="col-xs-6">Open</div>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6">
            {
              times.map((time, idx) => (
                <div key={`seasonal-time-${idx}`}>
                  <span>{time.start} - {time.end}</span><span className="square"></span>
                </div>
              ))
            }
          </div>
          <div className="col-xs-6">
            Add Hours
          </div>
        </div>
        <div className="footer">
          <div className="col-xs-6">
            <span className="select-date">Select Date <i className="fa fa-calendar"></i></span>

          </div>
          <div className="col-xs-6">
            <div>
              <span>00:00 - 00:00</span><span className="square"></span>
              <button className="btn btn-primary"> add Hours</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
