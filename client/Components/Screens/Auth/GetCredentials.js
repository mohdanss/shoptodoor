import React, {useEffect, useRef} from 'react';
import styles from './GetCredentials.styles';
import SvgImage from './logoWhite.svg';

import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import EclipseDropper from '../../Molecules/EclipseDropper';
import HeaderTextAuthScreens from '../../Molecules/HeaderTextAuthScreens';
import STDInput from '../../Atoms/STDInput';
import OTPScreen from './OTPScreen';
import Logo from '../../Atoms/Logo/Logo';

import {useState} from 'react';

const GetCredentials = ({route, navigation}) => {
  const [stepNo, setStepNo] = useState(route.params.step);

  // for step 1
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  // for step 2
  const [number, setNumber] = useState('');

  // for step 3
  const [otp, setOtp] = useState('');

  // if both first and last name are valid, enable the next button, using useEffect
  useEffect(() => {
    if (stepNo === 1) {
      console.log(fName, lName);
      if (fName.length >= 3 && lName.length >= 3) {
        setProceedBtnEnabled(true);
      } else {
        setProceedBtnEnabled(false);
      }
    } else if (stepNo === 2) {
      console.log(fName, lName, number);
      if (number.length === 11 && /^03[0-4][0-9]{8}$/.test(number)) {
        setProceedBtnEnabled(true);
      } else {
        setProceedBtnEnabled(false);
      }
    } else if (stepNo === 3) {
      console.log(fName, lName, number, otp);
      console.log(otp.length + ' <-> ' + otp);
      if (otp.length === 4) {
        setProceedBtnEnabled(true);
      } else {
        setProceedBtnEnabled(false);
      }
    }
  }, [stepNo, fName, lName, number, otp]);

  // when to enable the next button
  const [proceedBtnEnabled, setProceedBtnEnabled] = useState(false);

  const handleOTPSubmit = () => {
    console.log('OTP submitted');
  };

  return (
    <View style={[styles.container]}>
      {/* <EclipseDropper /> */}
      <View style={styles.headerContainer}>
        <View style={styles.backNavContainer}>
          <TouchableOpacity style={styles.backNav}>
            <Text style={styles.backNavText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <SvgImage />
        </View>
      </View>
      <View style={styles.bottomContent}>
        <HeaderTextAuthScreens stepNo={stepNo} />
        <View style={styles.credContainer}>
          {
            // for register NAME -> PHONE -> OTP
            stepNo === 1 ? (
              <>
                <STDInput placeholder="John" type="text" cb={setFName} />
                <STDInput placeholder="Doe" type="text" cb={setLName} />
              </>
            ) : // for login PHONE -> OTP
            stepNo === 2 ? (
              <View style={styles.inputContainer}>
                <STDInput
                  placeholder="Phone Number"
                  type="number"
                  cb={setNumber}
                />
              </View>
            ) : (
              <>
                <View style={styles.OTPScreenTextContainer}>
                  <Text style={styles.OTPScreenText1}>Get Verified</Text>
                  <Text style={styles.OTPScreenText2}>
                    a verification code has been sent via SMS to {'\n'} +92{' '}
                    {number.slice(1)}
                  </Text>
                </View>
                <OTPScreen cb={setOtp} navigation={navigation} />
              </>
            )
          }

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
            <Auth
              navigation={navigation}
              step={stepNo}
              isEnabled={proceedBtnEnabled}
              callback={setStepNo}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Auth = ({navigation, step, isEnabled, callback}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        styles.btnAuth,
        !isEnabled ? styles.btnAuthDisabled : null,
      ]}
      onPress={() => {
        if (step === 1) {
          callback(2);
        } else if (step === 2) {
          callback(3);
        } else {
          callback(4);
        }
      }}
      disabled={!isEnabled}>
      <Text style={(styles.btnAuthText, styles.textBold)}>Proceed</Text>
    </TouchableOpacity>
  );
};

export default GetCredentials;
