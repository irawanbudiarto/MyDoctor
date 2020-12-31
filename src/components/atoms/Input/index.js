import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    height: 45,
    padding: 12,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
  },
});
