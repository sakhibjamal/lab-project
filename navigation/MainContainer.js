import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//tabs
import CityTab from './Tabs/CityTab';
import DailyTab from './Tabs/DailyTab';
import HourlyTab from './Tabs/HourlyTab';

//names
const cityName = 'City';
const dailyName = 'Daily';
const hourlyName = 'Hourly';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="City"
          component={CityTab}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Daily"
          component={DailyTab}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Hourly"
          component={HourlyTab}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
