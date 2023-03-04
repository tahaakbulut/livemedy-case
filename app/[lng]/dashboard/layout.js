'use client';
import Sidebar from '../components/sidebar';
import styles from './dashboard.module.scss';

function Dashboard({ children, params: { lng } }) {
  console.log(lng, 'layout');
  return (
    <div className="container pt-5">
      <div className="row align-items-start">
        <Sidebar lng={lng} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Dashboard;
