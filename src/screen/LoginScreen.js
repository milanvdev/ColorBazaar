import React from 'react';
import Layout from '../common/Layout';
import SmallLogo from '../assets/svg/SmallLogo';
import {Text, View} from 'react-native';
import {Fonts} from '../style/fonts';
import Input from '../common/CommonInput';

const LoginScreen = () => {
  return (
    <Layout>
      <SmallLogo />
      <View style={{paddingVertical: 32}}>
        <Text style={{fontFamily: Fonts.PoppinsBold}}>
          Sign in to your Account
        </Text>
        <Text
          style={{
            paddingTop: 5,
            fontFamily: Fonts.PoppinsMedium,
            fontStyle: 12,
          }}>
          Enter your phone number and email to log in.
        </Text>
      </View>
      <View>
        <Input label="Phone number" />
      </View>
    </Layout>
  );
};

export default LoginScreen;
