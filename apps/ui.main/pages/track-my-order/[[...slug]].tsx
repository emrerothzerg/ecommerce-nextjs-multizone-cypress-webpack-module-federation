import { Footer } from '@ko-ui-apps/footer';
import { Header } from '@ko-ui-apps/header';
import dynamic from 'next/dynamic';

const OrderTrackingApp = dynamic(
  // @ts-ignore
  () => import('OrderTrackingApp/OrderTrackingApp'),
  {
    ssr: false,
    loading: () => <p>Skeleton Loading Here!...</p>,
  }
);

const Page = () => {
  return (
    <>
      <Header />
      <OrderTrackingApp />
      <Footer />
    </>
  );
};

export default Page;
