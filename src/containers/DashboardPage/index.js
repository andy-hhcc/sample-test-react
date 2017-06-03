import React from 'react';
import ContentWrapper from 'components/ContentWrapper';
import General from './General/index';

import './style.less'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props)
    {

    }
  }

  render() {
    return (<ContentWrapper>
      <section className="content-header">
        <h1>
          Dashboard
        </h1>
        <ol className="breadcrumb">
          <li><a href="/#"><i className="fa fa-dashboard"></i> Level</a></li>
          <li className="active">Here</li>
        </ol>
      </section>
      <section className="content">
        <General/>
      </section>
    </ContentWrapper>);
  }
}

export default DashboardPage;
