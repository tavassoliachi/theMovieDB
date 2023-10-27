import { IMAGE_PATH } from '../constants';
import noIMG from '../assets/images/noImage.jpg';
import { MovieAndTvPreview } from '../redux/types';

export const formatPopular = (data: MovieAndTvPreview[]) => {
  return data.slice(0, 20).map((item) => ({
    poster_path: item.poster_path ? IMAGE_PATH + item.poster_path : noIMG,
    id: item.id,
  }));
};
