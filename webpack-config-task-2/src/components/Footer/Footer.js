import React from 'react';
import { Logo } from '../Logo';
import './Footer.css';

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer">
        <Logo/>
      </footer>
    )
  }
}

export default Footer;