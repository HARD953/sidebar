import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigationNa from './StackNavigationNa'

function LogoTitle() {
    return (  
      <Image
        style={{height: 150}}
        source={require('../../assets/img/habit.jpg')}
      />
    );
  }

const Home2 = () => {
  return (
    <>
        <LogoTitle />
        <NavigationContainer>
            <StackNavigationNa />
        </NavigationContainer>
    </>
  )
}

export default Home2