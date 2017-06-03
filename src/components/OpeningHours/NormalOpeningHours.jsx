import React, {Component} from 'react';
import './style.less';


export default class NormalOpeningHours extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {startDate, times} = this.props.data;
    return (<div className="normal">

      <div className="col-xs-6">
        <div className="col-xs-6">{startDate}</div>
        <div className="col-xs-6">Open</div>
      </div>
      <div className="col-xs-6">
        <div className="col-xs-6">
          {
            times.map((time) => (
              <div>
                <span>{time.start} - {time.end}</span><span className="square"></span>
              </div>
            ))
          }
        </div>
        <div className="col-xs-6">
          Add Hours
        </div>
      </div>
    </div>)
  }
}
