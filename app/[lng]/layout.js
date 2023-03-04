import { dir } from 'i18next';
// import Header from './components/header';
import './styles.scss';
const languages = ['tr', 'en'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {/* <Header /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
