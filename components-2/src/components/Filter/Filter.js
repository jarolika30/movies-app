import React, { useEffect, useState } from 'react';
import './Filter.css';

export default function Filter() {
  const [optionsState, setOptionsState] = useState();

  useEffect(() => {
    setOptionsState(2);
  }, []);

  const handleChange = (event) => {
    setOptionsState(event.target.value);
  }

  return (
    <div className="sort-wrap">
      <span>Sort by</span>
      <div className="sort-select">
        <select className="filter-select" value={optionsState} onChange={handleChange}>
          <option value="1">title</option>
          <option value="2">release date</option>
        </select>
      </div>
  </div>
  )
}
