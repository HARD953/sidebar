import { View, Text,Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import Donateur from './Donateur'

export default function Detail(){
  const don=[
    {
      nom:"banane",
      nature:"Aliment",
      date:"2022-07-07",
      urls:require("../../assets/img/aide.jpg")
    },
    {
      nom:"banane",
      nature:"Aliment",
      date:"2022-07-07",
      urls:require("../../assets/img/aide.jpg")
    },
    {
      nom:"banane",
      nature:"Aliment",
      date:"2022-07-07",
      urls:require("../../assets/img/aide.jpg")
    },
    {
      nom:"banane",
      nature:"Aliment",
      date:"2022-07-07",
      urls:require("../../assets/img/aide.jpg")
    },
    {
      nom:"banane",
      nature:"Aliment",
      date:"2022-07-07",
      urls:require("../../assets/img/aide.jpg")
    },
    {
      nom:"banane",
      nature:"Aliment",
      date:"2022-07-07",
      urls:require("../../assets/img/aide.jpg")
    },
    {
      nom:"banane",
      nature:"Aliment",
      date:"2022-07-07",
      urls:require("../../assets/img/aide.jpg")
    },
    {
      nom:"banane",
      nature:"Aliment",
      date:"2022-07-07",
      urls:require("../../assets/img/aide.jpg")
    }

  ]
  return(
    <SafeAreaView>
      <FlatList data={don}
          numColumns={2} 
          keyExtractor={(item,index)=>index.toString()}
          renderItem={({item})=>(<Donateur don={item} />)}>
        </FlatList>
    </SafeAreaView>
  )
}