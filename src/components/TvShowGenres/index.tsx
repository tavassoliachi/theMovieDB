import GenresSlider from '../GenresSlider';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../redux/types';
import { CircularProgress } from '@mui/material';

const TvShowGenres = () => {
  const { data, loading } = useSelector(
    (state: RootStateType) => state.genres.tvShows,
  );

  if (loading) {
    return <CircularProgress size={50} />;
  } else if (data.length < 1) {
    return null;
  }
  return (
    <div>
      <GenresSlider data={data} />
    </div>
  );
};

export default TvShowGenres;
