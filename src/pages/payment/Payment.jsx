import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Payment.css';
import LeftSection from '../../components/leftSection/LeftSection';
import RightSection from '../../components/rightSection/RightSection';
const Payment = () => {
  return (
    <div className="PaymentPage">
      <Navbar />
      <header className="header">
        <LeftSection />
        <RightSection />
      </header>
    </div>
  );
};

export default Payment;
