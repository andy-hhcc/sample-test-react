import React, {Component} from 'react';
import Box from 'components/Box';
import NormalOpeningHours from 'components/OpeningHours/NormalOpeningHours';
import SeasonalOpeningHours from 'components/OpeningHours/SeasonalOpeningHours';


export default class OpeningHours extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {normal, seasonal} = this.props.data;
    return (<Box
      title="Opening Hours"
    >
      <div className="col-md-6">
        <NormalOpeningHours data={normal}/>
      </div>
      <div className="col-md-6">
        <SeasonalOpeningHours data={seasonal}/>
      </div>
    </Box>);
  }
}

