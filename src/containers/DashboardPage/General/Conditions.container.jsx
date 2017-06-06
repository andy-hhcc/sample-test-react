import React, {Component} from 'react';
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
    value: 'Comparison',
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

const categoriesCol1 = [
  {value: 'Sales'},
  {value: 'ATV - All'},
  {value: 'Transactions'},
  {value: '<Category> Sales'}
]

const categoriesCol2 = [
  {value: 'Category Qty'},
  {value: 'Order type'}
]

const stores = [
  {value: 'All Stores'},
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
    return (
      <div className="filter-conditions">
        <div className="col-md-2 filter-item">
          <ChartType typeConditions={type}/>
        </div>
        <div className="col-md-2 filter-item">
          <Frequency frequencyData={frequency}/>
        </div>
        <div className="col-md-3 date-range-block filter-item">
          <DateRange dateRangeData={dateRange}/>
        </div>
        <div className="col-md-3 categories-block filter-item">
          <Category categoriesCol1={categoriesCol1} categoriesCol2={categoriesCol2}/>
        </div>
        <div className="col-md-2 filter-item">
          <Stores stores={stores}/>
        </div>
      </div>
    );
  }
}

