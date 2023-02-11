import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/Logo/LogoWhite';
import styles from 'Welcome.styles';

// welcome - default RC.
const Welcome = ({navigation}) => {
  return (
    // welcome screen container
    <View style={[styles.container]}>
      <View style={styles.eclipseContainer}>
        <View style={styles.eclipse} />
        {/* the title logo container */}
        <View style={styles.stdTextContainer}>
          {/* the title logo/text */}
          <Text style={styles.stdWhiteB}>
            {/* using svg logo  */}
            <Logo />
          </Text>
        </View>
      </View>
      {/* bottom content container */}
      <View style={styles.bottomContent}>
        {/* text container */}
        <View style={styles.textContainer}>
          {/* text */}
          <Text style={styles.text}>
            Welcome to our official app, why wait? Start shopping now and
            experience the convenience of{' '}
            <Text style={styles.textBoldItalic}>Shop to Door</Text>
            {'\n'}
          </Text>
          <Text style={[styles.text, styles.textBold]}>Let's get started</Text>
          {/* a small circle empty to show a single page */}
        </View>
        {/* buttons container */}
        <View style={styles.buttonContainer}>
          <Auth navigation={navigation} step={2} />
          <Auth navigation={navigation} step={1} />
        </View>
      </View>
    </View>
  );
};

// login button component
const Auth = ({navigation, step}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, step === 2 ? styles.btnLogin : styles.btnRegister]}
      onPress={() => navigation.navigate('GetCredentials', {step: step})}>
      <Text style={styles.btnText}>{step === 2 ? 'Login' : 'Register'}</Text>
    </TouchableOpacity>
  );
};

export default Welcome;
