import {StyleSheet} from 'react-native';
import {Fonts} from '../../style/fonts';

export default StyleSheet.create({
  balanceCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginTop: 16,
    padding: 16,
  },
  balanceContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceLabel: {
    color: 'black',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
  },
  balanceAmount: {
    color: 'black',
    fontFamily: Fonts.PoppinsBold,
    fontSize: 32,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
    paddingTop: 4,
    textAlign: 'center',
  },
});
