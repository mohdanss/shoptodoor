import React, {useRef} from 'react';
import styles from './GetCredentials.styles';

import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {useState} from 'react';

import Logo from '../../../assets/Logo/LogoWhite';

const GetCredentials = ({route, navigation}) => {
  console.log(route);
  let step = 3 || route.params.step;

  const [stepNo, setStepNo] = useState(step);
  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState('');
  const inputs = useRef([]);

  const handleOTPInput = (index, value) => {
    setOtp(value);
    console.log(value, index);
    if (value !== '' && index !== 3) {
      inputs.current[index + 1].focus();
    }
    if (value === '' && index !== 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleOTPBackspace = (index, value) => {
    setOtp(value);
    if (value === '') {
      inputs.current[index - 1].focus();
    }
  };

  const handleOTPSubmit = () => {
    console.log('OTP submitted');
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.eclipseContainer}>
        <View style={styles.eclipse} />
        <View style={styles.stdTextContainer}>
          <Text style={styles.stdWhiteB}>
            <Logo />
          </Text>
        </View>
      </View>
      <View style={styles.bottomContent}>
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
          <View style={styles.stepLineContainer}>
            <Lines stepNo={stepNo} />
          </View>
        </View>
        <View style={styles.credContainer}>
          {stepNo === 1 ? (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="John"
                  placeholderTextColor="#454545"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Doe"
                  placeholderTextColor="#454545"
                />
              </View>
            </>
          ) : stepNo === 2 ? (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#fff"
                keyboardType="numeric"
                onChangeText={text => setNumber(text)}
                value={number}
              />
            </View>
          ) : (
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
          )}

          <View style={styles.textContainer}>
            <Text style={[styles.text]}>
              {stepNo === 1
                ? 'Proceed to enter your number'
                : stepNo === 2
                ? 'Proceed to enter your OTP'
                : 'Enter your OTP to continue'}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Auth navigation={navigation} />
          </View>
        </View>
      </View>
    </View>
  );
};

const Auth = ({navigation, step}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.btnAuth]}
      onPress={() => navigation.navigate('GetCredentials')}>
      <Text style={[styles.btnText, styles.btnAuthText]}>Continue</Text>
    </TouchableOpacity>
  );
};

const Lines = ({stepNo}) => {
  console.log(stepNo);
  return (
    <>
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
    </>
  );
};

export default GetCredentials;
