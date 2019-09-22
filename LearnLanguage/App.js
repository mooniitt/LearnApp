/**
 * Version 0.0.1
 * by moonitt
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import {Questions, QuestionsWrap} from './app/components/index';
import {QA} from './app/views/';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <QA />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
