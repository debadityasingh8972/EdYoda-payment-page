import React from 'react';
import './SelectionTab.css';

const SelectionTab = ({
  name,
  id,
  value,
  disabled,
  labelText,
  totalPrice,
  monthPrice,
  selected,
  onChange,
  tag,
}) => {
  const onChangeHandler = () => {
    onChange(id);
  };

  return (
    <div
      className={`selectionTabContainer ${selected ? 'checkShadow' : ''} ${
        disabled ? 'disabledTabContainer' : ''
      } `}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        checked={selected}
        onChange={onChangeHandler}
      />
      <p className={`${tag ? 'tag' : ''}`} style={{ background: `${tag[2]}` }}>
        {tag[1]}
      </p>

      <label htmlFor={id}>
        <p className="labelHeading">{labelText}</p>
        <div className="pricing">
          <h4>
            <span className="price-1">Total</span> {totalPrice}
          </h4>
          <p>
            {monthPrice}
            <span className="price-2">/mo</span>
          </p>
        </div>
      </label>
    </div>
  );
};

export default SelectionTab;
