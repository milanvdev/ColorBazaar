import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {View} from 'react-native';

const App = () => {
  return (
    <View style={{backgroundColor: '#1A1C26', flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default App;
