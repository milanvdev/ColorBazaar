import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts} from '../style/fonts';

const Input = ({
  label,
  iconName,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 6}}>
        <Text style={styles.label}>{label}</Text>
        {iconName && (
          <Icon name={iconName} size={24} color="#666" style={styles.icon} />
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
  },
  label: {
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
  },
  icon: {
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    fontFamily: Fonts.PoppinsMedium,
    color: 'black',
  },
});

export default Input;
