import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    color: '#112340',
    fontWeight: '600',
    marginTop: 20,
  },
});
