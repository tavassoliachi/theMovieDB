import { useSelector } from 'react-redux';
import { RootStateType } from '../../redux/types';
import { PopularItemsSlider } from '../PopularItemsSlider';
import { CircularProgress } from '@mui/material';

export const PopularTvShows = () => {
  const { data, loading } = useSelector(
    (state: RootStateType) => state.popular.tvShows,
  );
  if (loading) {
    return <CircularProgress size={50} />;
  } else if (data?.length < 1) {
    return null;
  }
  return (
    <div>
      <PopularItemsSlider data={data} title={'Popular Tv shows'} type="tv" />
    </div>
  );
};
