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
  return <AccountApp />;
};

export default Page;
