import React, { useContext, useState } from 'react';

const BaseContext = React.createContext();
export const useBase = () => useContext(BaseContext);

export const languageList = [
  { key: 'TR', icon: '/flag/TR.png' },
  { key: 'EN', icon: '/flag/EN.png' },
  { key: 'DE', icon: '/flag/DE.png' },
  { key: 'RU', icon: '/flag/RU.png' },
];

export const user = {
  id: 0,
  name: 'Taylan Önerci',
  job: 'Uzman, Adli Tıp',
  race: 'Türk',
  locale: 'Ankara, Türkiye',
  works: [
    { id: 0, name: 'Özel Tıp Merkezi', title: 'Uzman Doktor', startDate: 'Mayıs 2020', endDate: 'Halen' },
    { id: 1, name: 'Eğitim Araştırma Merkezi', title: 'Doktor', startDate: 'Haziran 2018', endDate: 'Eylül 2019' },
  ],
  certificates: [
    { id: 0, name: 'Cert 1', date: 'Şubat 2020' },
    { id: 1, name: 'Cert 2', date: 'Mayıs 2023' },
  ],
  awards: [
    { id: 0, name: 'Award', from: 'Kuruluş Adı', date: 'Şubat 2020' },
    { id: 1, name: 'Award', from: 'Kuruluş Adı', date: 'Mayıs 2023' },
  ],
};

export const BaseProvider = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState(languageList[0]);

  const setLang = (lang) => {
    setSelectedLang({ ...lang });
  };

  return <BaseContext.Provider value={{ selectedLang, setLang }}>{children}</BaseContext.Provider>;
};
