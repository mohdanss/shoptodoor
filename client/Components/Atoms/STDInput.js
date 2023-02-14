import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Atoms.styles';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const STDInput = ({placeholder, type, cb}) => {
  const handleName = text => {
    if (text.length >= 3) {
      cb(text);
      return true;
    }
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Name too short',
      text2: 'Name should be atleast 3 characters long',
      visibilityTime: 1000,
    });
    cb(text);
    return false;
  };

  const handlePhoneNumberInput = number => {
    const regex = /^03[0-4][0-9]{8}$/;
    if (number.length === 11) {
      if (regex.test(number)) {
        cb(number);
        return true;
      }
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Invalid number',
        text2: 'Please enter a valid number 03xx xxxxxxx',
        visibilityTime: 1000,
      });
      cb(number);
      return false;
    }
    cb(number);
    return false;
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#454545"
        keyboardType={type === 'number' ? 'numeric' : 'default'}
        maxLength={type === 'number' ? 11 : 20}
        onChangeText={type === 'number' ? handlePhoneNumberInput : handleName}
      />
    </View>
  );
};

export default STDInput;
