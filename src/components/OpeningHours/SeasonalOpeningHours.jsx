import React, {Component} from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import DatePicker from 'react-bootstrap-date-picker';
import {toastr} from 'react-redux-toastr';
import _ from 'lodash';
import './style.less';

const format = 'h:mm a';
export default class SeasonalOpeningHours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonalTimes: [
        {
          date: new Date(),
          open: 1,
          times: [
            {start: new Date(), end: new Date(),},
          ],
        }
      ],
      newDate: new Date(),
      newTime: {
        start: new Date(),
        end: new Date(),
      },
    };
    this.addHour = this.addHour.bind(this);
    this.removeHour = this.removeHour.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.addDate = this.addDate.bind(this);
  }

  addHour(key) {
    const prevState = Object.assign({}, this.state);
    const date = prevState.seasonalTimes.find((d) => d.date === key);
    date.times.push({start: new Date(), end: new Date()});
    this.setState({
      seasonalTimes: prevState.seasonalTimes,
    });
  }

  removeHour(key, index) {
    const prevState = Object.assign({}, this.state);
    const date = prevState.seasonalTimes.find((d) => d.date === key);
    date.times.splice(index, 1);
    this.setState({
      seasonalTimes: prevState.seasonalTimes,
    });
  }

  handleChangeDate(value) {
    this.setState({
      newDate: new Date(value),
    });
  }

  handleTimeChange(type, value) {
    if (type === 'start') {
      this.setState({
        ...this.state,
        newTime: {
          ...this.state.newTime,
          start: value,
        }
      });
    } else {
      this.setState({
        ...this.state,
        newTime: {
          ...this.state.newTime,
          end: value,
        }
      });
    }
  }

  addDate() {
    const prevState = {...this.state};
    let date = prevState.seasonalTimes.find(
      (d) => moment(d.date).format("MM/DD") === moment(prevState.newDate).format("MM/DD")
    );

    if (typeof date != 'undefined') {
      toastr.warning('Please choose another date');
      return;
    }

    const newDate = {
      open: 1,
      date: prevState.newDate,
      times: [prevState.newTime],
    };

    prevState.seasonalTimes.push(newDate);
    this.setState({
      seasonalTimes: prevState.seasonalTimes,
    });
  }

  render() {
    const seasonalTimesSort = _.sortBy(this.state.seasonalTimes, 'date');
    const seasonalTimes = seasonalTimesSort.map((o, idx) => (
      <div className="row seasonal-times" key={`seasonal-date-${idx}`}>
        <div className="col-xs-4">
          <div className="row">
            <div className="col-xs-6">{moment(o.date).format("DD/MM")}</div>
            <div className="col-xs-6">
              <select name="" id="">
                <option value="1">Open</option>
                <option value="0">Close</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-xs-8">
          {
            o.times.map((time, i) => (
              <div className="row"
                   key={`seasonal-time-${i}`}
              >
                <div key={`normal-time-${i}`} className="col-xs-3">
                  <TimePicker
                    showSecond={false}
                    defaultValue={moment(time.start)}
                    format={format}
                    use12Hours
                  />

                </div>
                <div className="col-xs-1">-</div>
                <div className="col-xs-3">
                  <TimePicker
                    showSecond={false}
                    defaultValue={moment(time.end)}
                    format={format}
                    use12Hours
                  />
                </div>
                <div
                  className="col-xs-1 removeHour"
                  onClick={() => this.removeHour(o.date, i)}
                >
                  X
                </div>
                {
                  i === 0 && (
                    <div className="col-xs-3 addHour"
                         onClick={() => this.addHour(o.date)}
                    >
                      Add Hours
                    </div>
                  )
                }
              </div>
            ))
          }
          {
            o.times.length === 0 && (
              <div className="col-xs-3 addHour"
                   onClick={() => this.addHour(o.date)}
              >
                Add Hours
              </div>
            )
          }
        </div>
      </div>
    ));


    return (
      <div className="normal seasonal">
        <div className="head-title">
          Seasonal Opening Hours
        </div>
        { seasonalTimes }
        <div className="row add-date-region">
          <div className="col-xs-4">
            <DatePicker
              dateFormat="DD/MM/YYYY"
              value={this.state.newDate.toISOString()}
              onChange={(val) => this.handleChangeDate(val)}
            />
          </div>
          <div className="col-xs-8">
            <div>
              <div className="row">
                <div className="col-xs-3">
                  <TimePicker
                    showSecond={false}
                    defaultValue={moment(this.state.newTime.end)}
                    format={format}
                    use12Hours
                    onChange={(value) => {
                      this.handleTimeChange('start', value);
                    }}
                  />
                </div>
                <div className="col-xs-1">-</div>
                <div className="col-xs-3">
                  <TimePicker
                    showSecond={false}
                    defaultValue={moment(this.state.newTime.end)}
                    format={format}
                    use12Hours
                    onChange={(value) => {
                      this.handleTimeChange('end', value);
                    }}
                  />
                </div>
                <div className="col-xs-4">
                  <button className="btn btn-primary"
                          onClick={this.addDate}
                  >
                    Add
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
