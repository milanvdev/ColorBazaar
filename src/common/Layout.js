import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

const Layout = ({
  children,
  style,
  translucent = true,
  statusBarStyle = 'dark-content',
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor="transparent"
        translucent={translucent}
      />

      <ScrollView
        contentContainerStyle={[styles.content, style]}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FF',
    paddingHorizontal: 24,
    paddingTop: StatusBar.currentHeight + 24,
  },

  content: {
    flexGrow: 1,
  },
});

export default Layout;
