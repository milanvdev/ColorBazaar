import {View, Text} from 'react-native';
import React from 'react';
import styles from './Account.style';
import AvatarIcon from '../../assets/svg/AvatarIcon';

const AccountHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <View style={styles.avatarContainer}>
          <AvatarIcon />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.text}>MEMBERNNGQQQNT</Text>
          <Text style={styles.textWithPadding}>UID | 2194362</Text>
          <Text style={styles.text}>Last login: 2025-03-02 22:20:05</Text>
        </View>
      </View>
    </View>
  );
};

export default AccountHeader;
