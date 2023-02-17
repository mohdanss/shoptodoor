import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottomContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70%',
    width: '90%',
  },
  btn: {
    alignItems: 'center',
    borderRadius: 50,
    height: 48,
    justifyContent: 'center',
    width: '100%',
  },
  btnAuth: {
    backgroundColor: '#A21D21',
    borderColor: '#181722',
  },
  btnAuthDisabled: {
    backgroundColor: '#252525',
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
  btnAuthText: {
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
    height: '100%',
  },
  credContainer: {
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 24,
  },
  light: {
    color: '#f6f6f6',
  },
  dim: {
    opacity: 0.3,
  },

  inputContainer: {
    alignItems: 'center',
    borderRadius: 4,
    height: 56,
    justifyContent: 'center',
    marginBottom: 12,
    width: '100%',
  },
  otpContainer: {
    alignItems: 'center',
    borderColor: 'red',
    height: '60%',
    justifyContent: 'center',
    width: '100%',
  },
  otpField: {
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  otpText: {
    color: '#f6f6f6',
    fontSize: 24,
    fontWeight: 'bold',
    borderColor: '#a21d21',
    borderWidth: 2,
    textAlign: 'center',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  stdTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
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
  stepContainer: {
    alignItems: 'flex-start',
    borderColor: 'red',
    height: '30%',
    justifyContent: 'center',
    width: '100%',
  },
  stepHeader: {
    borderColor: 'red',
    flexDirection: 'row',
    width: '100%',
  },
  stepHeaderText: {
    color: '#f6f6f6',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  stepLine: {
    backgroundColor: '#f6f6f6',
    height: 3,
    width: '32%',
  },

  stepLineContainer: {
    borderColor: 'red',
    flexDirection: 'row',
    height: '50%',
    justifyContent: 'space-between',
    width: '100%',
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
    width: '100%',
  },

  // OTP Screen Text
  OTPScreenTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  OTPScreenText1: {
    color: '#f6f6f6',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  OTPScreenText2: {
    color: '#f6f6f6',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'normal',
  },

  // Header
  headerContainer: {
    alignItems: 'center',
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },

  backNavContainer: {
    width: '50%',
  },
  logoContainer: {
    width: '50%',
    alignItems: 'flex-end',
  },

  // Header
});

export default styles;
