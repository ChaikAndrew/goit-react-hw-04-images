import React, { useState } from 'react';
import s from '../SearchBar/SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value: query } }) => {
    setQuery(query);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <header className="searchbar">
      <form className={s.form} onSubmit={handleSubmitForm}>
        <button className={s.form_btn} type="submit">
          <span className={s.form_label}>Search</span>
        </button>

        <input
          className={s.form_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
      </form>
    </header>
  );
};
