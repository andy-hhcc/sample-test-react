import React, {Component} from 'react';


export default class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 'All Store',
      containerClassName: 'main-area'
    }
  }

  onChange(value) {
    this.setState({
      currentValue: value,
      showSelect: false
    })
  }

  toggleSelectbox() {
    this.setState({
      showSelect: !this.state.showSelect
    });
  }

  hideMenu(e) {
    let _target = e.target || e.srcElement;

    while (_target
    && _target.className
    && _target.className.indexOf(this.state.containerClassName) == -1) /* will stop at div.id="container" because no className found */
    {
      _target = _target.parentNode
    }
    if (!_target) return;

    if (_target.parentNode !== this._selectContainer && this.state.showSelect) {
      this.setState({
        showSelect: false
      })
    }
  }

  componentWillMount() {
    this._hideMenu = (e) => this.hideMenu(e);
  }

  componentDidMount() {
    window.addEventListener('click', this._hideMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._hideMenu);
    this._hideMenu = null
  }

  render() {
    const {stores} = this.props;
    const {currentValue, showSelect} = this.state;
    return (
      <div className="stores">
        <div className="select-custom"
             ref={(e) => this._selectContainer = e}>
          <div className={`${this.state.containerClassName}`} onClick={::this.toggleSelectbox}>
            <span className="value">{currentValue}</span>
            <div className="inline-block">
              <i className="fa fa-caret-up" aria-hidden="true"></i>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
          </div>
          <ul className={`select ${showSelect ? '' : 'hidden'}`}>
            {stores && stores.map((o, index) => (
              <li key={index} onClick={(e) => this.onChange(o.value)}>{o.value}</li>
            ))}
          </ul>

        </div>
      </div>
    );
  }
}


