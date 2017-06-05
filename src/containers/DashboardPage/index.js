import React from 'react';
import ContentWrapper from 'components/ContentWrapper';
import General from './General/index';
import { Tabs, Tab } from 'react-bootstrap';

import './style.less'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props)
    {

    }
  }

  render() {
    return (<ContentWrapper>
      <Tabs defaultActiveKey={1}>
        <Tab eventKey={1} title="GENERAL">
          <General />
        </Tab>
        <Tab eventKey={2} title="PRODUCT">Tab 2 content</Tab>
        <Tab eventKey={3} title="USERS">Tab 3 content</Tab>
      </Tabs>
    </ContentWrapper>);
  }
}

export default DashboardPage;
