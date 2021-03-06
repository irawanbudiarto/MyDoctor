import React from 'react';
import {ImageBackground, StyleSheet, Text, View, StatusBar} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => {
            navigation.replace('Login');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 110,
    fontFamily: fonts.primary[600],
  },
});
