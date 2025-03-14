import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1C26',
  },
});

export default App;
