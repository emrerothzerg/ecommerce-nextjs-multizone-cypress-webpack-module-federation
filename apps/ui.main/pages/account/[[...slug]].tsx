import { Footer } from '@ko-ui-apps/footer';
import { Header } from '@ko-ui-apps/header';
import dynamic from 'next/dynamic';

const AccountApp = dynamic(
  // @ts-ignore
  () => import('AccountApp/AccountApp'),
  {
    ssr: false,
    loading: () => <p>Skeleton Loading Here!...</p>,
  }
);

const Page = () => {
  return (
    <>
      <Header />
      <AccountApp />
      <Footer />
    </>
  );
};

export default Page;
