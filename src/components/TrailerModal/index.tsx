import { Modal } from '@mui/material';
import styles from './styles.module.css';

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
  trailerUrl: string;
};
export const TrailerModal = ({
  isModalOpen,
  closeModal,
  trailerUrl,
}: Props) => {
  if (!isModalOpen) {
    return null;
  }
  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <div className={styles.modalInnerCont}>
        <iframe
          title="Trailer"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailerUrl}`}
          allowFullScreen
        />
      </div>
    </Modal>
  );
};
