import React from 'react';
import './Filter.css';

export default function Filter() {
  return (
    <div className="sort-wrap">
      <span>Sort by</span>
      <div className="sort-select">
        <select className="filter-select">
          <option value="1">release date</option>
          <option value="2">raiting</option>
        </select>
      </div>
  </div>
  )
}
