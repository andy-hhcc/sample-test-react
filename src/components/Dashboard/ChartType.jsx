import React, {Component} from 'react';
import FormGroup from 'components/FormGroup';


// TODO:
// Make Item edit workable with select, radio button, or checkbox
class ItemEdit extends Component {
  constructor(props) {
    super(props);
  }

  radioChange(e) {
    this.props.changeRadio(e.target.value);
  }

  render() {
    const {title, value} = this.props;
    return (<FormGroup title={title}>
      {
        <label className="show radio-inline" key={value} htmlFor={value}>
          <div className={`circle-radio ${this.props.active ? 'active' : ''}`}>
            <div className="circle-inside"></div>
          </div>
          <input id={value} onChange={::this.radioChange} className="hidden" name="typechart" type="radio"
                 value={value}/>
          {value}
        </label>
      }
    </FormGroup>);
  }
}


export default class ChartType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ''
    }
  }

  changeRadio(value) {
    this.setState({active: value})
  }

  render() {
    const {typeConditions} = this.props;
    return (
      <div>
        {typeConditions && typeConditions.map((o, index) => (
          <ItemEdit key={index} title="" changeRadio={::this.changeRadio} value={o.value} active={o.value == this.state.active ? true : false}/>
        ))}
      </div>
    );
  }
}


