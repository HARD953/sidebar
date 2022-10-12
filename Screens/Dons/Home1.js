import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNav from './StackNavigator'

function HeaderContent() {
    return(
      <View style={{height:150,backgroundColor:'#212F3D',justifyContent:'center',alignItems:'center',position:'relative'}}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>5000 FCFA</Text>
      </View>
    )
  }

const Home1 = () => {
  return (
    <>
        <HeaderContent />  
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    </>
  )
}

export default Home1