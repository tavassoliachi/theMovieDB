import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import styles from './styles.module.css';
import { FormattedReview } from '../../types';
import Review from '../Review';

type Props = {
  data: FormattedReview[];
  itemsPerPage?: number;
};

const ReviewsPaginated = ({ data: reviews, itemsPerPage = 1 }: Props) => {
  const [page, setPage] = useState(1);

  if (reviews.length < 1) {
    return null;
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedReviews = reviews.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Reviews</h1>
      <div className={styles.reviewsCont}>
        {displayedReviews.map((review) => (
          <Review review={review} />
        ))}
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          sx={{ button: { color: '#ffffff' } }}
          count={Math.ceil(reviews.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </div>
  );
};

export default ReviewsPaginated;
