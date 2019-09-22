import React from 'react';
import {View, StyleSheet} from 'react-native';

function QuestionsWrap({children}) {
  return <View style={styles.wrap}>{children}</View>;
}

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: '100%',
  },
});

export default QuestionsWrap;
