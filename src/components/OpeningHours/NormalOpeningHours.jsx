import React, {Component} from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import './style.less';

const format = 'h:mm a';

export default class NormalOpeningHours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openHours: [
        {
          startDate: 'Monday',
          open: 1,
          times: [
            {
              start: new Date(),
              end: new Date(),
            },
          ],
        },
        {
          startDate: 'Tuesday',
          open: 1,
          times: [
            {
              start: new Date(),
              end: new Date(),
            },
          ],
        },
        {
          startDate: 'Wednesday',
          open: 1,
          times: [
            {
              start: new Date(),
              end: new Date(),
            },
          ],
        },
        {
          startDate: 'Thursday',
          open: 1,
          times: [
            {
              start: new Date(),
              end: new Date(),
            },
          ],
        },
        {
          startDate: 'Friday',
          open: 1,
          times: [
            {
              start: new Date(),
              end: new Date(),
            },
          ],
        },
        {
          startDate: 'Saturday',
          open: 1,
          times: [
            {
              start: new Date(),
              end: new Date(),
            },
          ],
        },
        {
          startDate: 'Sunday',
          open: 1,
          times: [
            {
              start: new Date(),
              end: new Date(),
            },
          ],
        },                                              
      ]
    }
    this.addHour = this.addHour.bind(this);
    this.removeHour = this.removeHour.bind(this);
  }

  addHour(key) {
    const prevState = Object.assign({}, this.state);
    const date = prevState.openHours.find((d) => d.startDate === key);
    date.times.push({ start: new Date(), end: new Date() });
    this.setState({
      openHours: prevState.openHours,
    });
  }

  removeHour(key, index) {
    const prevState = Object.assign({}, this.state);
    const date = prevState.openHours.find((d) => d.startDate === key);
    date.times.splice(index, 1);
    this.setState({
      openHours: prevState.openHours,
    });
  }

  render() {
    const days = this.state.openHours.map((o, idx) => (
      <div className="row" key={`opening-hours-${idx}`}>
        <div className="col-xs-4">
          <div className="row">
            <div className="col-xs-6">{o.startDate}</div>
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
                <div className="row">
                  <div key={`normal-time-${i}`} className="col-xs-4">
                    <TimePicker
                      showSecond={false}
                      defaultValue={moment(time.start)}
                      format={format}
                      use12Hours
                    />
                  </div>
                  <div className="col-xs-4">
                    <TimePicker
                      showSecond={false}
                      defaultValue={moment(time.end)}
                      format={format}
                      use12Hours
                    />
                  </div>
                  <div
                    className="col-xs-1 removeHour"
                    onClick={() => this.removeHour(o.startDate, i)}
                  >
                    X
                  </div>
                  {
                    i === 0 && (
                      <div className="col-xs-3 addHour"
                        onClick={() => this.addHour(o.startDate)}
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
                    onClick={() => this.addHour(o.startDate)}
                  >
                    Add Hours
                  </div>
                )
            }
        </div>
      </div>
    ))
    return ( 
      <div className="normal">
        { days }
      </div>
    )
  }
}
