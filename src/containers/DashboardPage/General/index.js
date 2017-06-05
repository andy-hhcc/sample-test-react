import React from 'react';
import Conditions from './Conditions.container';
import Chart from '../../../components/Dashboard/Chart';

const data = [
  {name: '27/02', uv: 100, pv: 240},
  {name: '28/02', uv: 300, pv: 139},
  {name: '01/03', uv: 200, pv: 283},
  {name: '02/03', uv: 278, pv: 390},
  {name: '03/03', uv: 189, pv: 480},
  {name: '04/03', uv: 239, pv: 380},
  {name: '06/03', uv: 149, pv: 430},
  {name: '07/03', uv: 349, pv: 230},
  {name: '08/03', uv: 149, pv: 370},
  {name: '09/03', uv: 159, pv: 339},
  {name: '10/03', uv: 179, pv: 322},
  {name: '11/03', uv: 119, pv: 110},
  {name: '12/03', uv: 109, pv: 239},
  {name: '13/03', uv: 49, pv: 432},
];
export default class General extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <Conditions/>
        <Chart chartData={data}/>
      </div>
    )
  }
}

