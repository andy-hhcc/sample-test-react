import React, {Component} from 'react';
import FormGroup from 'components/FormGroup';


// TODO:
// Make Item edit workable with select, radio button, or checkbox
const ItemEdit = ({title, value}) =>
  (
    <FormGroup title={title}>
      {
        <label className="show checkbox-inline" key={value} htmlFor={value}>
          <input id={value} name="typechart" type="checkbox" value={value}/>
          {value}
        </label>
      }
    </FormGroup>
  )


export default class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {categories} = this.props;
    return (
      <div>
        {categories && categories.map((o, index) => (
          <ItemEdit key={index} title="" value={o.value}/>
        ))}
      </div>
    );
  }
}


