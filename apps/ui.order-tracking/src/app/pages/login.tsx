import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      order tracking login page
      <br />
      <Link to="/track-my-order/details/">go to details page</Link>
    </>
  );
};

export default LoginPage;
