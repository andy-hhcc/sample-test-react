import React, {Component} from 'react';
import FormGroup from 'components/FormGroup';


// TODO:
// Make Item edit workable with select, radio button, or checkbox
class ItemEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  onChange(e) {
    this.setState({active: e.target.checked});
  }

  render() {
    const {title, value} = this.props;
    const {active} = this.state;
    return (
      <FormGroup title={title}>
        {
          <label className="show checkbox-inline" key={value} htmlFor={value}>
            <div className={`square-checkbox ${active ? 'active' : ''}`}>
              <div className="square-inside"></div>
            </div>
            <input id={value} onChange={::this.onChange} className="hidden" type="checkbox"
                   value={value}/>
            {value}
          </label>
        }
      </FormGroup>);
  }
}



export default class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {categoriesCol1,categoriesCol2} = this.props;
    return (
      <div>
        <div className="col-md-6">
          {categoriesCol1 && categoriesCol1.map((o, index) => (
            <ItemEdit key={index} title="" value={o.value}/>
          ))}
        </div>
        <div className="col-md-6">
          {categoriesCol2 && categoriesCol2.map((o, index) => (
            <ItemEdit key={index} title="" value={o.value}/>
          ))}
        </div>

      </div>
    );
  }
}


