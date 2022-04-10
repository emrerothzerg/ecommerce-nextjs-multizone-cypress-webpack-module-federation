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
  return <OrderTrackingApp />;
};

export default Page;
