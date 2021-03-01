import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li className="list-item"><a href="#all">All</a></li>
          <li className="list-item"><a href="#documentary">Documentary</a></li>
          <li className="list-item"><a href="#comedy">Comedy</a></li>
          <li className="list-item"><a href="#horror">Horror</a></li>
          <li className="list-item"><a href="#crime">Crime</a></li>
        </ul>
      </>
    )
  }
}

export default Navigation;