import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import SearchModal from '../SearchModal';
import SearchIcon from '@mui/icons-material/Search';
import { SearchIconWrapper, StyledInputBase, Search } from './styledMui';

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const [debouncedSearch] = useDebounce<string>(search, 1000);

  useEffect(() => {
    if (search.length > 2 && !focused) {
      setFocused(true);
    } else if (search === '') {
      document.body.style.overflow = 'visible';
      setFocused(false);
    }
  }, [focused, search]);

  if (focused) {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return <SearchModal setSearch={setSearch} search={search} debouncedSearch={debouncedSearch} />;
  }
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Search>
  );
};

export default SearchBar;
