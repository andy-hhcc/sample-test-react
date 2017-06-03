import React, {Component} from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';


export default class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {chartData} = this.props;
    return (
      <div className="chart">
        <ResponsiveContainer>
          <LineChart width={880} height={250} data={chartData}
                     margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis />
            <CartesianGrid strokeDasharray="5 5"/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#20B9FC"/>
            <Line type="monotone" dataKey="uv" stroke="#86c5e0"/>
          </LineChart>
        </ResponsiveContainer>
        <div className="rotate left">Revenue</div>
        <div className="rotate right">No of transactions</div>
      </div>
    );
  }
}


