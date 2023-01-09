import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';
import { useEffect } from 'react';
import { BaseProvider } from '../../contexts/base-context';

function Layout({ children }) {
  useEffect(() => {
    import('bootstrap/js/dist/dropdown');
  }, []);

  return (
    <BaseProvider>
      <Head>
        <title>LiveMedy</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </BaseProvider>
  );
}

export default Layout;
