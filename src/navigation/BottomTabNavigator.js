import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import ActivityScreen from '../screen/ActivityScreen';
import WalletScreen from '../screen/WalletScreen';
import AccountScreen from '../screen/AccountScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
