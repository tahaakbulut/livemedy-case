'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { user } from '../../../../contexts/base-data';
import { IoSearch } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
import styles from './header.module.scss';

function Header() {
  const [notification, setNotification] = useState(true);

  const showNotification = () => {
    if (!notification) return;
    setNotification(false);
    alert('notification alert');
    setTimeout(() => {
      setNotification(true);
    }, 5000);
  };

  return (
    <header className="container d-flex align-items-center py-4">
      <Link href="/" className={styles.logo}>
        <Image src="/logo.png" alt="Livemedy Logo" width={150} height={33} />
      </Link>

      {/* Search */}
      <div className={`${styles.search} ms-auto`}>
        <input type="text" name="search" placeholder="Ara" />
        <IoSearch size="18px" />
      </div>
      {/* Search End*/}

      {/* Notification*/}
      <button
        type="button"
        onClick={showNotification}
        className={`${notification && styles.shown} ${
          styles.notification
        } btn btn-md btn-outline-secondary px-3 py-2 me-2 lh-lg ms-auto`}
      >
        <FaBell />
      </button>
      {/* Notification End*/}

      <Link className={`${styles.profile} btn btn-md btn-primary py-2 lh-lg`} href="/profile">
        {user.name}
      </Link>

      {/* Language*/}
      {/* <div className={`${styles.language} dropdown ms-2`}>
        <button
          className="btn dropdown-toggle d-flex align-items-center"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Image
            src={selectedLang.icon}
            alt={`${selectedLang.key} flag icon`}
            width={24}
            height={16}
            className="me-1"
          />
          {selectedLang.key}
        </button>
        <ul className="dropdown-menu">
          {languageList.map(
            (lang) =>
              lang.key != selectedLang.key && (
                <li key={lang.key}>
                  <button className="dropdown-item" type="button" onClick={() => setLang(lang)}>
                    {lang.key}
                  </button>
                </li>
              ),
          )}
        </ul>
      </div> */}
      {/* Language End*/}
    </header>
  );
}

export default Header;
