import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
