import React from 'react';
import './Filter.css';

class Filter extends React.Component {
  render() {
    return (
      <>
        <div className="sort-wrap">
          <span>Sort by</span>
          <div className="sort-select">
            <select className="filter-select">
              <option value="1">RELEASE DATE</option>
              <option value="2">RAITING</option>
            </select>
          </div>
        </div>
      </>
    )
  }
}

export default Filter;