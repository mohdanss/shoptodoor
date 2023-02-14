import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Atoms.styles';

const STDButton = ({navigation, step, callback}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, step === 2 ? styles.btnLogin : styles.btnRegister]}
      onPress={callback}>
      <Text style={styles.btnText}>{step === 2 ? 'Login' : 'Register'}</Text>
    </TouchableOpacity>
  );
};

export default STDButton;
