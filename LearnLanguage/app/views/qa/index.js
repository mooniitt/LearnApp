import React from 'react';
import {View, StyleSheet} from 'react-native';
import {QuestionsWrap, Question, Answer} from '../../components';

function QA() {
  return (
    <View style={styles.wrap}>
      <QuestionsWrap>
        <Question label="ok" />
        <View style={{marginTop: 30, width: '100%'}}>
          <Answer label="好的" />
        </View>
        <View style={{margin: 16, width: '100%'}}>
          <Answer label="不对" />
        </View>
      </QuestionsWrap>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 200,
  },
});

export default QA;
