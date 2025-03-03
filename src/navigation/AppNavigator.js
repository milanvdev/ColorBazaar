import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import AuthStackNavigator from './AuthNavigator';
import DepositScreen from '../screen/AccountScreen/DepositScreen';
import WithdrawScreen from '../screen/AccountScreen/WithdrawScreen';
import WalletScreen from '../screen/AccountScreen/WalletScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WalletScreen">
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{headerShown: false}}
        />

        {/* Account Screen Stack Goes Here */}
        <Stack.Screen
          options={{headerShown: false}}
          name="WalletScreen"
          component={WalletScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Deposit"
          component={DepositScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Withdraw"
          component={WithdrawScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
