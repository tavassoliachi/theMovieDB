import React from 'react';
import { MovieAndTvPreview } from '../../redux/types';
import { PopularItemsSlider } from '../PopularItemsSlider';

type Props = {
  data: MovieAndTvPreview[];
  type: 'movie' | 'tv';
};

const Similars = ({ data, type }: Props) => {
  return (
    <div>
      <PopularItemsSlider data={data} type={type} title={'Simmilar Content'} />
    </div>
  );
};

export default Similars;
