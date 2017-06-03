

import React from 'react';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import ReduxToastr from 'react-redux-toastr';
// import { connect } from 'react-redux';
// import {
//   loadCurrentUserInfo,
// } from 'auth/actions';
import 'react-redux-toastr/src/less/index.less';

class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <SideBar />
        { React.Children.toArray(this.props.children) }
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates="true"
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        /> </div>
    );
  }
}

App.defaultProps = {
  user: { name: '', permissions: [] },
  // loadCurrentUserInfo: () => {},
};

App.propTypes = {
  // user: React.PropTypes.object,
  children: React.PropTypes.node.isRequired,
  // loadCurrentUserInfo: React.PropTypes.func,
};

export default App;
