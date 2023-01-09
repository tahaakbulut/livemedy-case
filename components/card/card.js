import styles from './card.module.scss';
import { FaPencilAlt } from 'react-icons/fa';

function Card({ children, title, ...props }) {
  return (
    <div {...props} className={`${styles.card} ${props.className}`}>
      <h2 className={styles.title}>{title}</h2>
      {children}
      <button type="button" className={styles.button}>
        <FaPencilAlt />
      </button>
    </div>
  );
}

export default Card;
