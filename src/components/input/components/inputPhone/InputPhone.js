import React from 'react';
import InputMask from 'react-input-mask';

// eslint-disable-next-line react/prop-types
const InputTime = ({ value, onChange, ...props }) => {
  const onInputChange = (event) => {
    onChange(event.target.value.replace(/[^\d]/g, ''));
  };

  return (
    <>
      <InputMask
        onChange={onInputChange}
        mask="+7 (999) 999-99-99"
        className="form__input"
        id="reg_phone"
        type="tel"
        name="phone_number"
        value={value}
        {...props}
      />
    </>
  );
};

export default InputTime;
