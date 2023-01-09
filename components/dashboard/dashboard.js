import Sidebar from '../sidebar/sidebar';
import styles from './dashboard.module.scss';

function Dashboard({ children }) {
  return (
    <div className="container pt-5">
      <div className="row align-items-start">
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Dashboard;
