import Link from 'next/link';
import Layout from '../components/layout/layout';

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-5">
        <Link href="/profile">GO PROFILE</Link>
      </div>
    </Layout>
  );
}
