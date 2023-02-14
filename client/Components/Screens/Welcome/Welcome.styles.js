import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#181722',
    flex: 1,
    width: '100%',
  },
  bottomContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    width: '100%',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    width: '90%',
  },
  text: {
    color: '#f6f6f6',
    fontSize: 18,
    textAlign: 'justify',
    fontWeight: '400',
    letterSpacing: 0,
    width: '100%',
  },
  textBold: {
    fontWeight: '700',
  },
  textBoldItalic: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  buttonContainer: {
    alignItems: 'center',
    borderColor: 'blue',
    justifyContent: 'flex-end',
    width: '100%',
  },
});

export default styles;
