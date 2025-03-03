import {StatusBar, StyleSheet} from 'react-native';
import {Fonts} from '../../style/fonts';

export default StyleSheet.create({
  header: {
    height: 224,
    position: 'relative',
    paddingTop: StatusBar.currentHeight + 24,
    paddingBottom: 24,
    backgroundColor: 'black',
    paddingHorizontal: 24,
    borderBottomEndRadius: 24,
    borderBottomLeftRadius: 24,
  },
  avatarContainer: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    width: 70,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoContainer: {
    marginLeft: 15,
  },
  text: {
    color: 'white',
    fontFamily: Fonts.PoppinsRegular,
  },
  textWithPadding: {
    color: 'white',
    paddingVertical: 3,
    fontFamily: Fonts.PoppinsRegular,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceContainer: {
    paddingHorizontal: 24,
  },
  balanceCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
  },
  balanceHeader: {
    paddingBottom: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  balanceText: {
    color: '#768096',
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 16,
  },
  balanceRow: {
    flexDirection: 'row',
  },
  marginNegative: {
    marginTop: -60,
  },
  balanceAmount: {
    color: '#000',
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 19,
  },
  refreshButton: {
    marginLeft: 8,
  },
  balanceOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
  },
  balanceOptionItem: {
    alignItems: 'center',
  },
  optionText: {
    fontFamily: Fonts.PoppinsMedium,
  },
});
