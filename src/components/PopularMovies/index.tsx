import { useSelector } from 'react-redux';
import { RootStateType } from '../../redux/types';
import { PopularItemsSlider } from '../PopularItemsSlider';
import { CircularProgress } from '@mui/material';

export const PopularMovies = () => {
  const { data, loading } = useSelector((state: RootStateType) => state.popular.movies);

  if (loading) {
    return <CircularProgress size={50} />;
  } else if (data?.length < 1) {
    return null;
  }
  return (
    <div>
      <PopularItemsSlider data={data} title={'Popular Movies'} type="movie" />
    </div>
  );
};
