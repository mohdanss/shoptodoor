import {StyleSheet} from 'react-native';

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
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    width: '90%',
  },
  btnLogin: {
    backgroundColor: '#A21D21',
    borderWidth: 0,
  },
  btnRegister: {
    marginTop: 8,
    borderColor: '#fff',
  },
  btnText: {
    color: '#f6f6f6',
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
  },
  eclipseContainer: {
    alignItems: 'center',
    width: '100%',
    height: '35%',
    justifyContent: 'center',
  },
  eclipse: {
    backgroundColor: '#A21D21',
    borderBottomLeftRadius: 200,
    left: '60%',
    position: 'absolute',
    transform: [{scaleX: 2}],
    width: '150%',
    height: '100%',
  },
  stdTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
  text: {
    color: '#f6f6f6',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 1,
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

export default styles;
