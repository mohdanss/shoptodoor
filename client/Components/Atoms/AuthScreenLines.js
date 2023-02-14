import {View} from 'react-native';
import React from 'react';

import styles from './Atoms.styles';

const AuthScreenLines = ({stepNo}) => {
  return (
    <View style={styles.stepLineContainer}>
      <View style={styles.stepLine} />
      <View
        style={
          stepNo === 2 || stepNo === 3
            ? styles.stepLine
            : [styles.stepLine, styles.dim]
        }
      />
      <View
        style={stepNo === 4 ? styles.stepLine : [styles.stepLine, styles.dim]}
      />
    </View>
  );
};

export default AuthScreenLines;
