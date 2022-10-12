import { View, Text,Button } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Profile</Text>
      <Button title='Toggle' onPress={()=> navigation.toggleDrawer()} />
    </View>
  )
}

export default Profile