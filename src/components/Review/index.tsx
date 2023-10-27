import React from 'react';
import { Link } from 'react-router-dom';
import TruncateOnSecondLine from '../CustomTruncate';
import styles from './styles.module.css';
import { FormattedReview } from '../../types';

type Props = {
  review: FormattedReview;
};

const Review = ({ review }: Props) => {
  return (
    <div className={styles.review} key={review.id}>
      <div className={styles.author}>
        <img src={review.image} alt={review.author} className={styles.image} />
        <h3>{review.author}</h3>
      </div>

      <div className={styles.content}>
        <TruncateOnSecondLine text={review.content} width={'100%'} style={{ marginTop: '20px' }} />
      </div>
      <Link to={review.url} className={styles.link}>
        View Comment
      </Link>
      <p className={styles.date}>{review.date}</p>
    </div>
  );
};

export default Review;
