import React from 'react';
import {View, StyleSheet} from 'react-native';

function ViewLayout({children}) {
  return <View style={styles.wrap}>{children}</View>;
}

const styles = StyleSheet.create({
  wrap: {
    // flex: 1,
    // backgroundColor: 'red',
  },
});

export default ViewLayout;
