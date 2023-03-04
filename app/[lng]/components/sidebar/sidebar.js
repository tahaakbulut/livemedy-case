import Link from 'next/link';
import styles from './sidebar.module.scss';
import { useTranslation } from '../../../i18n';
import { TbLogout, TbReportMoney } from 'react-icons/tb';
import { useSelectedLayoutSegment } from 'next/navigation';
import { IoCalendarClear, IoHome, IoPersonSharp, IoSettingsSharp } from 'react-icons/io5';

const links = [
  { label: ' Hesabım', path: 'profile', icon: <IoHome /> },
  { label: ' Takvim', path: 'calendar', icon: <IoCalendarClear /> },
  { label: ' Randevular', path: 'meets', icon: <IoPersonSharp /> },
  { label: ' Ayarlar', path: 'settings', icon: <IoSettingsSharp /> },
  { label: ' Ödeme bilgileri', path: 'payments', icon: <TbReportMoney size="16px" /> },
  { label: ' Randevular', path: 'about', icon: <IoHome /> },
];

export default function Sidebar({ lng }) {
  const { t } = useTranslation(lng, 'profile');
  const segment = useSelectedLayoutSegment();

  return (
    <nav className={styles.nav}>
      {links.map((l, i) => {
        const isActive = l.path === segment;
        return (
          <Link key={i} className={isActive ? styles.shown : ''} href={`/${lng}/dashboard/${l.path}`}>
            {l.icon}
            {l.label}
          </Link>
        );
      })}
      <a>
        <TbLogout size="16px" />
        Çıkış
      </a>
    </nav>
  );
}
