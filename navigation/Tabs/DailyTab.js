import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DailyTab({navigation}) {
  const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.MainView}>
      <Text>DailyTab</Text>
    </View>
  );
}

export default DailyTab;
