import { View, Text,Button } from 'react-native'
import React from 'react'

const SettingScreen = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Hello ,This is Setting Screen</Text>
      <Button title='Toggle' onPress={()=> navigation.toggleDrawer()} />
    </View>
  )
}

export default SettingScreen