import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HourlyTab({navigation}) {
  const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.MainView}>
      <Text>HourlyTab</Text>
    </View>
  );
}

export default HourlyTab;
