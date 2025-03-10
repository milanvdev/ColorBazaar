import React, {memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const BettingOptions = ({
  options,
  onSelect,
  selectedOption,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelect(item.title)}
          activeOpacity={0.7}
          style={[
            styles.bettingButton,
            selectedOption === item.title && styles.activeBettingButton,
          ]}>
          <Text
            style={[
              styles.bettingText,
              {color: selectedOption === item.title ? 'white' : '#67696F'},
            ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bettingButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#2D2F36',
  },
  activeBettingButton: {
    backgroundColor: '#FF9800',
  },
  bettingText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default memo(BettingOptions);
