import React from 'react';
import styles from './Molecules.styles';
import {View, Text} from 'react-native';

import AuthScreenLines from '../Atoms/AuthScreenLines';

const HeaderTextAuthScreens = ({stepNo}) => {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.stepHeader}>
        <Text style={styles.stepHeaderText}>
          {stepNo === 1
            ? 'Enter your name'
            : stepNo === 2
            ? 'Enter your number'
            : 'Enter your OTP'}
        </Text>
      </View>
      <AuthScreenLines stepNo={stepNo} />
    </View>
  );
};

export default HeaderTextAuthScreens;
