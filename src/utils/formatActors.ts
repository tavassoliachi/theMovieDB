import { IMAGE_PATH } from '../constants';
import noIMG from '../assets/images/noImage.jpg';
import { Actor } from '../types';

export const formatActors = (data: Actor[]) => {
  return data.map((actor) => ({
    profile_path: actor.profile_path ? IMAGE_PATH + actor.profile_path : noIMG,
    name: actor.name,
    character: actor.character,
  }));
};
