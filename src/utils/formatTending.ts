import { IMAGE_PATH } from '../constants';
import noIMG from '../assets/images/noImage.jpg';
import { MovieBasicInfo } from '../redux/types';

export const formatTrending = (data: MovieBasicInfo[]) => {
  return data.slice(0, 10).map((item) => ({
    title: item.title,
    poster_path: item.poster_path ? IMAGE_PATH + item.poster_path : noIMG,
    overview: item.overview,
    id: item.id,
  }));
};
