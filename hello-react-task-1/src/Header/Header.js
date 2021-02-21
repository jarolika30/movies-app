import React from 'react';
import { Logo } from '../Logo';
import './Header.css';

class Header extends React.Component {
  render()  {
    return (
      <header className="header">
        <Logo/>
      </header>
    )
  };
}

export default Header;