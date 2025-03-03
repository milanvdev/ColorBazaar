import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import UserIcon from '../../assets/svg/UserIcon';
import {Fonts} from '../../style/fonts';
import ArrayDown from '../../assets/svg/ArrayDown';

const options = [
  {icon: <ArrayDown />, label: 'Deposit'},
  {icon: <ArrayDown />, label: 'Withdraw'},
  {icon: <ArrayDown />, label: 'Deposit history'},
  {icon: <ArrayDown />, label: 'Withdrawal history'},
];

const WalletScreen = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const OptionButton = ({icon, label, isLast}) => (
    <TouchableOpacity style={[styles.button, !isLast && styles.buttonBorder]}>
      {icon}
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.userInfo}>
              <UserIcon />
              <View style={styles.userTextContainer}>
                <Text style={styles.userText}>Hello,</Text>
                <Text style={styles.userText}>Abdullah!</Text>
              </View>
            </View>
            <View style={styles.balanceCard}>
              <View style={styles.balanceContainer}>
                <Text style={styles.balanceLabel}>Main balance</Text>
                <Text style={styles.balanceAmount}>$14,235.34</Text>
              </View>
              <View style={styles.optionContainer}>
                {options.map((option, index) => (
                  <OptionButton
                    key={index}
                    icon={option.icon}
                    label={option.label}
                    isLast={index === options.length - 1}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
  },
  headerContent: {
    paddingTop: StatusBar.currentHeight + 24,
    paddingHorizontal: 24,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userTextContainer: {
    marginLeft: 10,
  },
  userText: {
    color: 'white',
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 14,
  },
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
    justifyContent: 'center',
    marginTop: 16,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBorder: {
    borderRightWidth: 1,
    borderRightColor: '#000',
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'black',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
    paddingTop: 4,
  },
});

export default WalletScreen;
