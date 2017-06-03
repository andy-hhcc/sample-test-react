import React from 'react';

const Header = ({ user }) => (
  <header className="main-header">
    <a href="index2.html" className="logo">
      <span className="logo-mini"><b>G</b></span>
      <span className="logo-lg"><b>TEST</b></span>
    </a>
    <nav className="navbar navbar-static-top" role="navigation">
      <a href="/#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li className="dropdown user user-menu">
            <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
              <img src="/lte/dist/img/avatar.png" className="user-image" alt="User Avatar" />
              <span className="hidden-xs">{user.name}</span>
            </a>
            <ul className="dropdown-menu">
              <li className="user-header">
                <img src="/lte/dist/img/avatar.png" className="img-circle" alt="User Avatar" />
                <p>
                  {user.name}
                </p>
              </li>
              <li className="user-footer">
                <div className="pull-left">
                  <a href="/#" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href="/logout" className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

Header.defaultProps = {
  user: { name: '', permissions: [] },
};

Header.propTypes = {
  user: React.PropTypes.object,
};

export default Header;
