import { IMAGE_PATH } from '../constants';
import noIMG from '../assets/images/noImage.jpg';
import { Review, FormattedReview } from '../types';

export const formatReviews = (data: Review[]): FormattedReview[] => {
  return data.map((review) => ({
    image: review.author_details.avatar_path
      ? IMAGE_PATH + review.author_details.avatar_path
      : noIMG,
    author: review.author,
    date: new Date(review.created_at).toLocaleDateString(),
    content: review.content.replace(/\r?\n/g, ' '),
    url: review.url,
    id: review.id,
  }));
};
