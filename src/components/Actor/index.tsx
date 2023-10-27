import { FormattedActor } from '../../types';
import styles from './styles.module.css';

const Actor = ({ profile_path, name, character }: FormattedActor) => {
  return (
    <div className={styles.slide}>
      <img src={profile_path} alt={name} />
      <div className={styles.texts}>
        <strong>{name}</strong>
        <br /> as
        <br /> <strong>{character}</strong>
      </div>
    </div>
  );
};

export default Actor;
