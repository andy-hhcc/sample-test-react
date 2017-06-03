import React, {Component} from 'react';


export default class DateRange extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dateRangeData} = this.props;
    return (
      <div className="date-range">
        <div className="from">
          <div>From</div>
          <div className="range-content">
            <input type="text" value={dateRangeData.start} className="form-control"/>
            <div className="square-grey inline-block"></div>
          </div>

        </div>
        <div className="to">
          <div>To</div>
          <div className="range-content">
            <input type="text" value={dateRangeData.end} className="form-control"/>
            <div className="square-grey inline-block"></div>
          </div>
        </div>

      </div>
    );
  }
}


