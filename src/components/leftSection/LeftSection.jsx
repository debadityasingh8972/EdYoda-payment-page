import React from 'react';
import './LeftSection.css';

import BookLogo from '../../assets/Book.svg';
import ClockLogo from '../../assets/Clock.svg';
import LiveLogo from '../../assets/Live.svg';
import ScholarLogo from '../../assets/Scholar.svg';
import AdsLogo from '../../assets/Adsfree.svg';
const LeftSection = () => {
  return (
    <div className="leftSectionContainer">
      <div className="leftSectionContent">
        <h2>
          Access curated courses worth
          <br />
          <span className="spantext">₹</span>
          <span className="linethrough spantext"> 18,500</span> at just{' '}
          <span className="highlightText spantext">₹ 99 </span>
          per year!
        </h2>{' '}
        <div className="ListItem">
          <img src={BookLogo} alt="" />
          <p>
            <span className="highlightText">100+</span> Job relevant courses
          </p>
        </div>
        <div className="ListItem">
          <img src={ClockLogo} alt="" />
          <p>
            <span className="highlightText">20,000+</span> Hours of content
          </p>
        </div>
        <div className="ListItem">
          <img src={LiveLogo} alt="" />
          <p>
            <span className="highlightText">Exclusive </span>webinar access
          </p>
        </div>
        <div className="ListItem">
          <img src={ScholarLogo} alt="" />
          <p>
            Scholarship worth <span className="highlightText">₹94,500</span>
          </p>
        </div>
        <div className="ListItem">
          <img src={AdsLogo} alt="" />
          <p>
            <span className="highlightText">Ad Free </span>learning experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
