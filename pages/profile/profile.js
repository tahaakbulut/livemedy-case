import Image from 'next/image';
import Dashboard from '../../components/dashboard';
import Layout from '../../components/layout/layout';
import { user } from '../../contexts/base-context';
import styles from './profile.module.scss';
import { BiBuilding, BiWorld } from 'react-icons/bi';
import { IoMdPin } from 'react-icons/io';
import Card from '../../components/card/card';

function Profile() {
  return (
    <Layout>
      <Dashboard>
        {/* Header */}
        <div className={styles.header}>
          <Image src="/doctor.png" alt="Livemedy Logo" width={144} height={144} />
          <div className="pb-3">
            <h1>{user.name}</h1>
            <h2>{user.job}</h2>
            <h6 className="d-flex align-items-center">
              <span className="d-flex align-items-center me-2">
                <IoMdPin className="me-1" size="16px" />
                {user.locale}
              </span>
              |
              <span className="d-flex align-items-center ms-2">
                <BiWorld className="me-1" size="16px" />
                {user.race}
              </span>
            </h6>
          </div>
        </div>
        {/* Header End*/}
        <Card title="Diller" className="mb-4">
          <ul className={styles.languages}>
            <li>Türkçe</li>
            <li>İngilizce</li>
          </ul>
        </Card>
        <div className={styles.grid}>
          <Card className="mb-4" title="İş Yeri ve Deneyim">
            <div className={styles.experience}>
              {user.works.map((work) => (
                <div key={work.id}>
                  <i>
                    <BiBuilding />
                  </i>
                  <div>
                    <h3>{work.title}</h3>
                    <h4>{work.name}</h4>
                    <span>
                      {work.startDate} - {work.endDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="mb-4" title="Sertifikalar">
            <ul className={styles.certificates}>
              {user.certificates.map((certificate) => (
                <li key={certificate.id}>
                  {certificate.name} <span>{certificate.date}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <Card title="Başarılar ve Ödüller">
          <div className="table-responsive">
            <table className={`${styles.awards} table`}>
              <thead>
                <tr className="table-light">
                  <th scope="col">Başlık</th>
                  <th scope="col">Veren Kuruluş</th>
                  <th scope="col">Tarih</th>
                </tr>
              </thead>
              <tbody>
                {user.awards.map((award) => (
                  <tr key={award.id}>
                    <td>{award.name}</td>
                    <td>{award.from}</td>
                    <td>{award.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </Dashboard>
    </Layout>
  );
}

export default Profile;
