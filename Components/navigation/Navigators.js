import { View, Text } from 'react-native';
import React, {useState,useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Test from '../../Screens/Connexion/Test';
import Login from '../../Screens/Connexion/Login';
import SignUp from '../../Screens/Connexion/SignUp';
import Welcome from '../../Screens/Connexion/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../globalContext';
import Splashscreen from '../../Screens/Connexion/Splashscreen';
import Drawer from '../../Screens/Dons/Drawer';
const Stack=createStackNavigator();
const Navigators = () => {
  const { userInfo,splashLoading }=useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashLoading ? (
          <Stack.Screen name='splash' component={Splashscreen} />
        ):(userInfo.access ? (
            <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown:false }} />
          ):(
            <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown:false }} /> 
            </>
          ))}  
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigators;