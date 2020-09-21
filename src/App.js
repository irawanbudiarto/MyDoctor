import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from './assets';

const App = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <ILLogo />
      <Text>My Doctor</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
