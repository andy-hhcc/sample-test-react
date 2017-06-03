import React, {Component} from 'react';
import FormGroup from 'components/FormGroup';


// TODO:
// Make Item edit workable with select, radio button, or checkbox
const ItemEdit = ({title, value}) =>
  (
    <FormGroup title={title}>
      {
        <label className="show radio-inline" key={value} htmlFor={value}>
          <input id={value} name="frequency" type="radio" value={value}/>
          {value}
        </label>
      }
    </FormGroup>
  )


export default class Frequency extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {frequencyData} = this.props;
    return (
      <div>
        {frequencyData && frequencyData.map((o, index) => (
          <ItemEdit key={index} title="" value={o.value}/>
        ))}
      </div>
    );
  }
}


