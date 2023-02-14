import React from 'react';

import {View, Text} from 'react-native';

import STDButton from '../../Atoms/STDButton';
import EclipseDropper from '../../Molecules/EclipseDropper';

import styles from './Welcome.styles';

const welcomeText =
  'Welcome to our official app, why wait? Start shopping now and experience the convenience of Shop to Door';
const welcomeTextBold = "Let's get started";

const Welcome = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <EclipseDropper />
      <View style={styles.bottomContent}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{welcomeText + '\n'}</Text>
          <Text style={[styles.text, styles.textBold]}>{welcomeTextBold}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <STDButton
            navigation={navigation}
            step={2}
            callback={() => navigation.navigate('GetCredentials', {step: 2})}
          />
          <STDButton
            navigation={navigation}
            step={1}
            callback={() => navigation.navigate('GetCredentials', {step: 1})}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
