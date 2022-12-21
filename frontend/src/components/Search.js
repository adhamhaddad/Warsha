import React, { useEffect, useRef, useState } from 'react';
import classes from '../css/Search.module.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const queryRef = useRef();

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {}, [query]);

  return (
    <div className={classes['searchbox']}>
      <div className={classes['searchbar']}>
        <input
          type='search'
          placeholder='Type to search..'
          onChange={onQueryChange}
          value={query}
          ref={queryRef}
        />
      </div>
      {result.length > 0 && (
        <div className={classes['search-result']}>
          <ul>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Search;
