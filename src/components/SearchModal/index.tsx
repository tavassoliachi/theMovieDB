import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchSearchResults } from '../../fetchers/fetchSearchResults';
import CloseIcon from '@mui/icons-material/Close';
import SearchResults from '../SearchResults';
import { MovieAndTvPreview } from '../../redux/types';

type Props = {
  setSearch: (val: string) => void;
  search: string;
  debouncedSearch: string;
};

const SearchModal = ({ setSearch, search, debouncedSearch }: Props) => {
  const [results, setResults] = useState<{
    movies: MovieAndTvPreview[];
    tvShows: MovieAndTvPreview[];
  }>({
    movies: [],
    tvShows: [],
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (debouncedSearch.length > 2) {
      (async () => {
        try {
          setLoading(true);
          const data = await fetchSearchResults({ keyword: debouncedSearch });
          setResults(data);
        } catch (err) {
          console.error('Failed to fetch data');
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [debouncedSearch, setLoading]);

  return (
    <div className={styles.mainContainer}>
      <div
        style={{ position: 'absolute', right: '20px', top: '20px', cursor: 'pointer' }}
        onClick={() => setSearch('')}
      >
        <CloseIcon sx={{ color: 'white' }} fontSize="large" />
      </div>
      <div className={styles.inputCont}>
        <input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {loading ? (
        <CircularProgress size={100} style={{ marginTop: '200px' }} />
      ) : (
        <div style={{ overflow: 'scroll' }}>
          <SearchResults heading="Movies" data={results.movies} type="movie" />
          <SearchResults heading="TvShows" data={results.tvShows} type="tv" />
        </div>
      )}
    </div>
  );
};

export default SearchModal;
