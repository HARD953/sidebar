import { View, Text,Button } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen1 from './detail';
import StackNav from './StackNavigator';

const HomeScreen = () => {
  return (
    <>
      <DetailScreen1/>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </>
  )
}

export default HomeScreen