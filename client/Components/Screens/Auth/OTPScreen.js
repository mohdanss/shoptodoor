import React from 'react';
import {View, TextInput} from 'react-native';
import {useRef, useState} from 'react';

import styles from '../../Compounds/Compounds.styles';

const OTPScreen = ({cb}) => {
  const [otp, setOtp] = useState('');

  const inputs = useRef([]);

  const handleOTPInput = (index, value) => {
    inputs.current[index].value = value;
    // if it's a number
    setOtp(inputs.current.map(input => input.value).join(''));

    if (value !== '' && index !== 3) {
      inputs.current[index + 1].focus();
    }
    if (value === '' && index !== 0) {
      inputs.current[index - 1].focus();
    }
    // if all input fields are filled with numbers
    cb(inputs.current.map(input => input.value).join(''));
  };

  const handleOTPBackspace = (index, value) => {
    inputs.current[index].value = value;
    if (value === 'Backspace' && index !== 0) {
      inputs.current[index - 1].focus();
    }

    if (value === '') {
      inputs.current[index - 1].focus();
    }
  };

  const handleOTPSubmit = () => {};

  return (
    <View style={styles.otpContainer}>
      <View style={styles.otpField}>
        {Array(4)
          .fill()
          .map((data, index) => (
            <TextInput
              key={index}
              style={styles.otpText}
              onChangeText={value => handleOTPInput(index, value)}
              onKeyPress={e =>
                e.nativeEvent.key === 'Backspace'
                  ? handleOTPBackspace(index, e.nativeEvent.key)
                  : null
              }
              onSubmitEditing={handleOTPSubmit}
              maxLength={1}
              placeholderTextColor="#fff"
              placeholder={inputs[index]}
              keyboardType="numeric"
              returnKeyType="done"
              ref={ref => (inputs.current[index] = ref)}
            />
          ))}
      </View>
    </View>
  );
};

export default OTPScreen;
