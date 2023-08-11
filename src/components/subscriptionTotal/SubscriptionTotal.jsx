import React from 'react';
import TimerIcon from '../../assets/IconClock1.svg';
import './SubscriptionTotal.css';
const SubscriptionTotal = ({ course }) => {
  const totalPrice = +course?.totalPrice?.slice(1);
  const duration = +course?.duration;
  const undiscountedPrice = Math.round(+duration * 1541.66);
  const discount = undiscountedPrice - totalPrice;

  return (
    <div className="subscriptionTotal">
      <div className="subheading">
        <p>Subscription Fee </p>

        <p className="price">₹{undiscountedPrice}</p>
      </div>
      <div className="box">
        <div>
          <p>Limited time offer</p>
          <p className="price">- ₹{discount}</p>
        </div>
        <p>
          <img src={TimerIcon} alt="" />
          Offer valid till 25th March 2023
        </p>
      </div>
      <div className="subheading">
        <p>
          <span className="totalHeading"> Total </span>(Incl. of 18% GST)
        </p>
        <p className="totalAmount">₹{totalPrice}</p>
      </div>
    </div>
  );
};

export default SubscriptionTotal;
