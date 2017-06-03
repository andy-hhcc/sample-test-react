import React, {Component} from 'react';
import Box from 'components/Box';
import ChartType from '../../../components/Dashboard/ChartType';
import Frequency from '../../../components/Dashboard/Frequency';
import DateRange from '../../../components/Dashboard/DateRange';
import Category from '../../../components/Dashboard/Category';
import Stores from '../../../components/Dashboard/Stores';


const type = [
  {
    value: 'Trends',
  },
  {
    value: 'Perfomance',
  },
  {
    value: 'Comparision',
  }
];
const frequency = [
  {value: 'Hourly'},
  {value: 'Daily'},
  {value: 'Weekly'},
  {value: 'Monthly'}
]

const dateRange = {
  start: '01/20/2017',
  end: '01/20/2017'
}

const categories = [
  {value: 'Sales'},
  {value: 'ATV - All'},
  {value: 'Transactions'},
  {value: '<Category> Sales'},
  {value: 'Category Qty'},
  {value: 'Order type'}
]

const stores = [
  {value: 'Store 1'},
  {value: 'Store 2'},
  {value: 'Store 3'},
  {value: 'Store 4'},
  {value: 'Store 5'},
  {value: 'Store 6'}
]

export default class Conditions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Box
      title=""
    >
      <div className="filter-conditions">
        <div className="col-md-2 filter-item">
          <ChartType typeConditions={type}/>
        </div>
        <div className="col-md-2 filter-item">
          <Frequency frequencyData={frequency}/>
        </div>
        <div className="col-md-3 filter-item">
          <DateRange dateRangeData={dateRange}/>
        </div>
        <div className="col-md-2 filter-item">
          <Category categories={categories}/>
        </div>
        <div className="col-md-3 filter-item">
          <Stores stores={stores}/>
        </div>
      </div>

    </Box>);
  }
}

