import React from 'react';
import ProfileCard from './ProfileCard';
import './style.less';
const Header = ({user, headerTitle}) => (
  <header className="main-header">
    <nav className="navbar navbar-static-top" role="navigation" style={{marginLeft: 0}}>
      <a href="/#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div
        className="page-name"
      >
        {headerTitle}
      </div>
      <div className="navbar-custom-menu">
        <ProfileCard
          name='Laura McGuiness'
          description='The Ice Cream Ltd'
        />
      </div>
    </nav>
  </header>
);

Header.defaultProps = {
  user: {name: '', permissions: []},
};

Header.propTypes = {
  user: React.PropTypes.object,
};

export default Header;
