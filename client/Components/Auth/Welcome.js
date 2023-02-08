import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// importing the svg logo (which is create as react component)
import Logo from '../../Static/Logo/LogoWhite';
import navigation

// welcome - default RC.
const Welcome = () => {
  // on press handler
  const onPressHandler = () => {
    // navigate to the login screen
    navigation.navigate('Login');
  };
  return (
    // welcome screen container
    <View style={[styles.container]}>
      {/* the eclipe style in the top-background */}
      <View style={styles.eclipse} />
      {/* the title logo container */}
      <View style={styles.stdTextContainer}>
        {/* the title logo/text */}
        <Text style={styles.stdWhiteB}>
          {/* using svg logo  */}
          <Logo />
        </Text>
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
          <Text style={[styles.text, styles.textBold]}>
            Login or register to get started.
          </Text>
          {/* a small circle empty to show a single page */}
        </View>
        {/* buttons container */}
        <View style={styles.buttonContainer}>
          {/* login button */}
          <LoginButton />
          {/* register button */}
          <RegisterButton />
        </View>
      </View>
    </View>
  );
};

// login button component
const LoginButton = () => {
  return (
    <TouchableOpacity style={[styles.btn, styles.btnLogin]}>
      <Text style={[styles.btnText, styles.btnLoginText]}>Login</Text>
    </TouchableOpacity>
  );
};

// register button component
const RegisterButton = () => {
  return (
    <TouchableOpacity style={[styles.btn, styles.btnRegister]}>
      <Text style={[styles.btnText, styles.btnLoginText]}>Register</Text>
    </TouchableOpacity>
  );
};

// styling...
const styles = StyleSheet.create({
  bottomContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 48,
    width: '100%',
  },
  btn: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50,
    height: 48,
    justifyContent: 'center',
    width: '90%',
  },
  btnLogin: {
    backgroundColor: '#A21D21',
    borderColor: '#181722',
  },
  btnRegister: {
    backgroundColor: '#181722',
    borderColor: '#f6f6f6',
    marginTop: 12,
  },
  btnText: {
    color: 'f6f6f6',
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnLoginText: {
    color: '#f6f6f6',
  },
  btnRegisterText: {
    color: '#f6f6f6',
  },
  buttonContainer: {
    alignItems: 'center',
    borderColor: 'blue',
    justifyContent: 'flex-end',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#181722',
    flex: 1,
    width: '100%',
  },
  eclipse: {
    backgroundColor: '#A21D21',
    borderBottomLeftRadius: 200,
    height: 320,
    left: '60%',
    position: 'absolute',
    transform: [{scaleX: 2}],
    width: '150%',
  },
  stdTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 150,
    width: '100%',
  },
  stdWhiteB: {
    color: '#f6f6f6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stdWhiteN: {
    color: '#f6f6f6',
    fontSize: 18,
    fontWeight: 'normal',
  },
  text: {
    color: '#f6f6f6',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify',
    width: '100%',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textBoldItalic: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    width: '90%',
  },
});

export default Welcome;
