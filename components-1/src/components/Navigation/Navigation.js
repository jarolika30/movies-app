import React from 'react';
import { Links } from '../../../mocksData/linkItems';
import Link from '../Link';
import './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <>
        <ul>
          {
            Links.map((el, index) => <Link key={index + el} title={el} />)
          }
        </ul>
      </>
    )
  }
}

export default Navigation;