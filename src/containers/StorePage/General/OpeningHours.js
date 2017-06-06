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
      <div className="col-md-6 no-padding">
        <NormalOpeningHours data={normal}/>
      </div>
      <div className="col-md-6 no-padding">
        <SeasonalOpeningHours data={seasonal}/>
      </div>
    </Box>);
  }
}

