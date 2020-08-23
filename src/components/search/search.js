import React, { Component } from 'react';
import './search.scss';

import searchIcon from '../../assets/svg/search-icon.svg';

class Search extends Component {
  render() {
    return (
      <form className="search">
        <label className="visually-hidden" htmlFor="search__input">
          Search hello world
        </label>
        <input
          className="search__input"
          id="search__input"
          type="search"
          name="search form"
          placeholder="e.g. jobs"
        />
        <button className="search__button" type="submit">
          <span className="visually-hidden">Submit search</span>
          <img src={searchIcon} alt="" />
        </button>
      </form>
    );
  }
}
export default Search;
