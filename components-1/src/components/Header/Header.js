import React from 'react';
import { Logo } from '../Logo';
import AddMovieButton from '../AddMovieButton';
import SearchMovieInput from '../SearchMovieInput';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-add-movie">
        <Logo/>
        <AddMovieButton/>
      </div>
      <SearchMovieInput/>
    </header>
  )
}
