import React from 'react';
import FormInput from './FormInput';

const PasswordInput = (props) => {
  return (
    <FormInput
      {...props}
      isPassword={true}
      keyboardType="default"
      autoCapitalize="none"
    />
  );
};

export default PasswordInput;