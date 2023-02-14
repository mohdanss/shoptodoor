import React from 'react';

import {View, Text} from 'react-native';

import styles from './Molecules.styles';

import Logo from '../Atoms/Logo/Logo';

// eclipse dorrper for auth and starter screens
const EclipseDropper = () => {
  return (
    <View style={styles.eclipseContainer}>
      <View style={styles.eclipse} />
      <View style={styles.stdTextContainer}>
        <Text style={styles.stdWhiteB}>
          <Logo />
        </Text>
      </View>
    </View>
  );
};

export default EclipseDropper;
