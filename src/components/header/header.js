import React, { Component } from 'react';
import './header.scss';

import Search from '../search/search';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__h1">Header</h1> <Search></Search>
      </header>
    );
  }
}
export default Header;
