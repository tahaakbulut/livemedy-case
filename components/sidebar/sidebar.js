import { ActiveLink } from '../common';
import styles from './sidebar.module.scss';
import { IoCalendarClear, IoHome, IoPersonSharp, IoSettingsSharp } from 'react-icons/io5';
import { TbLogout, TbReportMoney } from 'react-icons/tb';

function Sidebar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.breadcrumb}></div>
      <ActiveLink activeClassName={styles.shown} href="/profile">
        <a>
          <IoHome />
          Hesabım
        </a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.shown} href="/calendar">
        <a>
          <IoCalendarClear />
          Takvim
        </a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.shown} href="/">
        <a>
          <IoPersonSharp />
          Randevular
        </a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.shown} href="/">
        <a>
          <IoSettingsSharp />
          Ayarlar
        </a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.shown} href="/">
        <a>
          <TbReportMoney size="16px" />
          Ödeme bilgileri
        </a>
      </ActiveLink>
      <a>
        <TbLogout size="16px" />
        Çıkış
      </a>
    </nav>
  );
}

export default Sidebar;
