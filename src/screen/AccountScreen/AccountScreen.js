import {View, StatusBar} from 'react-native';
import React from 'react';
import styles from './AccountScreen.style';
import AccountHeader from '../../components/Account/AccountHeader';
import AccountBalanceCard from '../../components/Account/AccountBalanceCard';

const AccountScreen = ({navigation}) => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <AccountHeader />
        <AccountBalanceCard navigation={navigation} />
      </View>
    </>
  );
};

export default AccountScreen;
