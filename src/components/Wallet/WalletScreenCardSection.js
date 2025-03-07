import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Wallet.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DepositIcon from '../../assets/svg/DepositIcon';
import WithdrawIcon from '../../assets/svg/WithdrawIcon';
import DepositHistory from '../../assets/svg/DepositHistory';
import WithdrawalHistory from '../../assets/svg/WithdrawalHistory';

const options = [
  {icon: <DepositIcon />, label: 'Deposit'},
  {icon: <WithdrawIcon />, label: 'Withdraw'},
  {icon: <DepositHistory />, label: 'Deposit\nhistory'},
  {icon: <WithdrawalHistory />, label: 'Withdrawal\nhistory'},
];

const WalletScreenCardSection = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const OptionButton = ({icon, label}) => (
    <TouchableOpacity style={[styles.button]}>
      {icon}
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.balanceCard}>
      <View style={styles.balanceContainer}>
        <Ionicons name="wallet-outline" size={30} color="white" />
        <Text style={styles.balanceAmount}>$14,235.34</Text>
        <Text style={styles.balanceLabel}>Total balance</Text>
      </View>
      <View style={styles.optionContainer}>
        {options.map((option, index) => (
          <OptionButton key={index} icon={option.icon} label={option.label} />
        ))}
      </View>
    </View>
  );
};

export default WalletScreenCardSection;
