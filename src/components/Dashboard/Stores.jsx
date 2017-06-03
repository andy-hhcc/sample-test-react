import React, {Component} from 'react';


export default class Stores extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {stores} = this.props;
    return (
      <div className="stores">
        <select>
          {stores && stores.map((o, index) => (
            <option value={o.value}>{o.value}</option>
          ))}
        </select>
      </div>
    );
  }
}


