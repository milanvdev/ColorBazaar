import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Account.style';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {balanceCard} from '../../data/data';

const AccountBalanceCard = ({navigation}) => {
  return (
    <View style={[styles.balanceContainer, styles.marginNegative]}>
      <View style={styles.balanceCard}>
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceText}>Total balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>₹0.00</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.refreshButton}>
              <EvilIcons name="refresh" size={29} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.balanceOptions}>
          {balanceCard.map(item => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.route)}
              activeOpacity={0.7}
              key={item.id}
              style={styles.balanceOptionItem}>
              {item.icon}
              <Text style={styles.optionText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default AccountBalanceCard;
