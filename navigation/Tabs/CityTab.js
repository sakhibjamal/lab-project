import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function CityTab({navigation}) {
  const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.MainView}>
      <Text>CityTab</Text>
    </View>
  );
}

export default CityTab;
