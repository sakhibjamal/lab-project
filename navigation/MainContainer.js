import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgXml} from 'react-native-svg';
//tabs
import CityTab from './Tabs/CityTab';
import DailyTab from './Tabs/DailyTab';
import HourlyTab from './Tabs/HourlyTab';

//names
const cityName = 'City';
const dailyName = 'Daily';
const hourlyName = 'Hourly';

// const IconCity = `
// <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M11.513 0.00100708C12.2191 1.99613 13.6055 3.67875 15.4287 4.75347C17.2519 5.8282 19.3955 6.22634 21.483 5.87801C21.4028 6.82942 21.0221 7.73069 20.396 8.45153C19.7699 9.17237 18.9308 9.67543 18 9.88801V17L20 17.001V19.001H1.99999V17.001H3.99999V9.88801C3.06913 9.67533 2.22996 9.17227 1.60371 8.45147C0.977459 7.73067 0.596545 6.82945 0.515991 5.87801C2.60371 6.22691 4.74761 5.82916 6.57123 4.75459C8.39485 3.68002 9.78161 1.99733 10.488 0.00200725H11.513V0.00100708ZM16 10H5.99999V17H16V10ZM11 3.32701L10.89 3.48201C9.31449 5.64051 7.00783 7.15246 4.39999 7.73601L4.04199 7.80901L4.71499 7.99901H17.288L17.956 7.80901L17.945 7.80701C15.1999 7.28473 12.7561 5.73824 11.109 3.48101L11 3.32601V3.32701Z" fill="black"/>
// </svg>
// `;

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
            // tabBarIcon: ({color, size}) => (
            //   <SvgXml xml={IconCity} width="100%" height="100%" />
            // ),
          }}
        />
        <Tab.Screen
          name="Daily"
          component={DailyTab}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Hourly" component={HourlyTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
