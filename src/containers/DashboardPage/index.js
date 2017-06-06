import React from 'react';
import ContentWrapper from 'components/ContentWrapper';
import General from './General/index';
import {Tabs, Tab} from 'react-bootstrap';
import $ from 'jquery';
import './style.less'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props)
    {

    }
  }

  componentWillMount() {
    !$('body.skin-blue').hasClass('sidebar-collapse') && $('body.skin-blue').addClass('sidebar-collapse');
  }

  render() {
    return (<ContentWrapper>
      <div className="dashboard-general">
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="GENERAL">
            <General />
          </Tab>
          <Tab eventKey={2} title="PRODUCT">Tab 2 content</Tab>
          <Tab eventKey={3} title="USERS">Tab 3 content</Tab>
          <Tab eventKey={4} title="Add Benchmarks">Tab 3 content</Tab>
        </Tabs>
      </div>
    </ContentWrapper>);
  }
}

export default DashboardPage;
