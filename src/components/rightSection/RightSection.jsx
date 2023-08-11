import React, { useEffect, useState } from 'react';
import './RightSection.css';
import SelectionTab from '../selectionTab/SelectionTab';
import SubscriptionTotal from '../subscriptionTotal/SubscriptionTotal';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import PaymentLogo from '../../assets/Frame 12537.png';
const offers = [
  {
    name: 'Course Plan',
    value: '12 Months Subscription',
    disabled: true,
    labelText: '12 Months Subscription',
    totalPrice: '₹99',
    monthPrice: '₹8',
    duration: 12,
    tag: [true, 'Offer expired', '#F77171'],
  },
  {
    name: 'Course Plan',
    value: '12 Months Subscription',
    disabled: false,
    labelText: '12 Months Subscription',
    totalPrice: '₹179',
    monthPrice: '₹15',
    duration: 12,
    tag: [true, 'Recommended', '#47BA68'],
  },
  {
    name: 'Course Plan',
    value: '6 Months Subscription',
    disabled: false,
    labelText: '6 Months Subscription',
    totalPrice: '₹149',
    monthPrice: '₹25',
    duration: 6,
    tag: [false, '', ''],
  },
  {
    name: 'Course Plan',
    value: '3 Months Subscription',
    disabled: false,
    labelText: '3 Months Subscription',
    totalPrice: '₹99',
    monthPrice: '₹33',
    duration: 3,
    tag: [false, '', ''],
  },
];

const RightSection = () => {
  const [selectedID, setSelectedID] = useState(1);
  const [selectedCoure, setSelectedCoure] = useState(offers[1]);
  const onChangeHandler = (id) => {
    setSelectedID(id);
  };

  useEffect(() => {
    setSelectedCoure(offers[selectedID]);
  }, [selectedID]);

  return (
    <div className="rightSectionContainer">
      <div className="rightSectionContent">
        <div className="stepContainer">
          <div className="step">
            <p className="stepCircle">1</p>
            <span className="stepTitle">Sign Up</span>
          </div>
          <div className="step">
            <p className="stepCircle">2</p>
            <span className="stepTitle">Subscribe</span>
          </div>
        </div>
        <h2 className="rightSectionHeading">Select your subscription plan</h2>
        <div className="coursePlan">
          {offers.map((offer, index) => (
            <SelectionTab
              key={index}
              name={offer.name}
              id={index}
              tag={offer.tag}
              value={offer.value}
              disabled={offer.disabled}
              labelText={offer.labelText}
              totalPrice={offer.totalPrice}
              monthPrice={offer.monthPrice}
              selected={selectedID === index}
              onChange={onChangeHandler}
            />
          ))}
        </div>
        <SubscriptionTotal course={selectedCoure} />
        <div className="buttonContainer">
          <PrimaryButton
            btnColor="none"
            btnText="Cancel"
            textColor="red"
            borderColor="red"
          />
          <PrimaryButton
            btnColor="green"
            btnText="Proceed to Pay"
            textColor="white"
            borderColor="green"
          />
        </div>
        <img className="PaymentLogo" src={PaymentLogo} alt="" />
      </div>
    </div>
  );
};

export default RightSection;
