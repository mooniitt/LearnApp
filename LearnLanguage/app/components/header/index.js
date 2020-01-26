import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HEADER_BACK_BUTTON = require('../../assets/icon/header-back-button.png');

function Header({
  title,
  onLeftClick,
  leftTitle = '返回',
  onRightClick,
  rightTitle,
}) {
  return (
    <View style={styles.wrap}>
      <View style={[styles.leftItem, styles.item]}>
        <Image source={HEADER_BACK_BUTTON} style={styles.backButton} />
        <Text style={styles.leftTitle}>{leftTitle}</Text>
      </View>
      <View style={[styles.centerItem, styles.item]}>
        <Text style={styles.centerTitle}>{title}</Text>
      </View>
      <View style={[styles.rightItem, styles.item]}>
        <Text style={styles.rightTitle}>{rightTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerTitle: {
    fontSize: 18,
    color: '#222222',
    fontWeight: 'bold',
  },
  rightItem: {
    alignItems: 'flex-end',
  },
  rightTitle: {
    fontSize: 16,
  },
  leftItem: {
    flexDirection: 'row',
  },
  leftTitle: {
    fontSize: 16,
    marginLeft: 5,
  },
  backButton: {
    width: 12,
    height: 15,
  },
});

export default Header;
