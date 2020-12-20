import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

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
    borderColor: '#e9e9e9',
    height: 45,
    padding: 12,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    color: '#7D8797',
  },
});
