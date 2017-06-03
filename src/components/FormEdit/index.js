import React from 'react';
import Box from 'components/Box';
import FormGroup from 'components/FormGroup';

export default class FormEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }
  }

  render() {
    const EditBtn = (
      <i
        onClick={() => this.setState({isEditing: true,})}
        className="fa fa-pencil">
      </i>
    );
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        editing: this.state.isEditing,
      })
    );

    return (
      <Box
        title="Contact Details"
        headerButton={ this.state.isEditing ? undefined : EditBtn}
      >
        { childrenWithProps }
        {
          this.state.isEditing ?
            <div className="col-xs-12 body-footer">
              <button
                onClick={() => {
                  this.setState({isEditing: false,});
                  this.props.onSave();
                }}
                className="btn btn-primary"
              >
                Save
              </button>
              <button
                onClick={() => this.setState({isEditing: false,})}
                className="btn btn-default"
              >
                Cancel
              </button>
            </div>
            : <span />
        }

      </Box>
    )
  }
}

// TODO:
// Make Item edit workable with select, radio button, or checkbox
export const ItemEdit = ({editing, title, value}) =>
  (
    <FormGroup title={title}>
      {
        editing ? <input type="text" className="form-control" value={value}/> : <span>{value}</span>
      }
    </FormGroup>
  )

