import React from 'react';
import {Text} from 'react-native';

function CusText({label, ...props}) {
  return <Text {...props}>{label}</Text>;
}

export default CusText;
