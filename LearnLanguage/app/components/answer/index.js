import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../../config/color';
import CusText from '../custom-text';

function Questions({label}) {
  return (
    <View style={styles.wrap}>
      <CusText style={[styles.label]} label={label} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 45,
    backgroundColor: Color.$002,
    borderRadius: 3,
    width: '100%',
    justifyContent: 'center',
  },
  label: {
    paddingLeft: 15,
    fontSize: 18,
    color: Color.$003,
  },
});

export default Questions;
