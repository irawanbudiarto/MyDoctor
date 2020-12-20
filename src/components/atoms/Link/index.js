import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Link = ({title, size, align}) => {
  return (
    <View>
      <Text style={styles.title(size, align)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: (size, align) => ({
    fontSize: size,
    color: '#7D8797',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
