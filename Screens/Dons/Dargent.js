import React, { useState,useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { color } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";
import { View,Text,Button,Image, TouchableOpacity,StyleSheet } from "react-native";
import StackNav from './StackNavigator';
import { AuthContext } from '../../Components/globalContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { useContext } from 'react';



// function Task(props){
//   const [detail,setdetail]=useState()
//   const apihandler=()=>{
//     const url="https://apidons.herokuapp.com/listargea/"
//     fetch(url, { 
//       headers: new Headers({
//           'Authorization':  `Bearer ${userInfo.access}`,  
//       }),
//   }).then((res)=>res.json())
//     .then((resJons)=>{
//       setdetail(resJons)
//       alert(JSON.stringify(detail))
//     })
//   }

  // function Task(props){
  //   const {userInfo,logout}=useContext(AuthContext)
  //   const [detail,setdetail]=useState()
  //   const apihandler=(event)=>{
  //     const url="https://apidons.herokuapp.com/argent/"
  //     fetch(url, { 
  //       method:'GET',
  //       headers: new Headers({
  //           'Authorization':  `Bearer ${userInfo.access}`,  
  //       }),
  //   }).then((res)=>res.json())
  //     .then((resJons)=>{
  //       setdetail(resJons.data)
  //       alert(JSON.stringify(detail))
  //     })
  //   }

    function Task(props){
      const [selectedId, setSelectedId] = useState(null);
      const backgroundColor = props.donateur === selectedId ? "white" : "white";
      const color = props.donateur === selectedId ? 'cyan' : 'black';
      const apihandler=()=>{
        setSelectedId(props.donateur)
        alert(props.montant)
      }

  return(
    <TouchableOpacity onPress={apihandler}  style={[styles.item,{backgroundColor:backgroundColor}]}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.donateur} </Text>
        <Text style={styles.itemText}>{props.montant}</Text>
      </View>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText1}>{props.provider}</Text>
        <Text style={styles.itemText1}>{props.categorieV}</Text>
      </View>
    </TouchableOpacity>
  )
}


function HeaderContent() {
  return(
    <View style={{height:150,backgroundColor:'#212F3D',justifyContent:'center',alignItems:'center',position:'relative'}}>
      <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>5000 FCFA</Text>
    </View>
  )
}


export default function Argent({navigation}){
  const {userInfo,logout}=useContext(AuthContext)

  const url="https://apidons.herokuapp.com/argent/"
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    getListTrans();
    return()=>{
    }
  },[])

  getListTrans=()=>{
    fetch(url, { 
      method:'GET',
      headers: new Headers({
          'Authorization':  `Bearer ${userInfo.access}`,  
      }),
  })
    .then((res)=>res.json())
    .then((json)=>setData(json.data))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  }
  const [people,setPeople]=React.useState([
    {donateur:"Ouedraogo",date:"2022-07-08 ",montant:20000},
    {donateur:"Lanfiatech",date:"2022-07-08",montant:20000},
    {donateur:"Gouvernement",date:"2022-07-08",montant:20000},
    {donateur:"Kouassi",date:"2022-07-08",montant:20000},
    {donateur:"Konan",date:"2022-07-08",montant:20000},
    {donateur:"Yao",date:"2022-07-08",montant:20000},
    {donateur:"Yapi",date:"2022-07-08",montant:20000},
    {donateur:"Yapa",date:"2022-07-08",montant:20000},
    {donateur:"Yapa",date:"2022-07-08",montant:20000},
    {donateur:"Yapa",date:"2022-07-08",montant:20000},
    {donateur:"Yapa",date:"2022-07-08",montant:20000}
  ])

  return(
    <View style={{flex:1,justifyContent:'center'}}>
    <ScrollView >
          {
                loading ? (<Text>Loading ...</Text>):(
                  data.map((items,index)=>{
                    return(
                      <Task donateur={items.donateur} provider={items.provider} typeDons={items.typeDons} montant={items.montant} />
                    )
                  })
                )
              }
      </ScrollView>
  </View>
  )
}

const styles=StyleSheet.create({
  item:{
    backgroundColor:'#FFF',
    padding: 15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    position:'relative',
    height:80

  },
  itemLeft:{
    flexDirection:'column',
    alignItems:'center',
    flexWrap:'wrap',
    
  },
  square:{
    width:24,
    height:24,
    backgroundColor:'#55BCF6',
    opacity:0.4,
    borderRadius:5,
    marginRight:15
  },
  itemText:{
    maxWidth:'100%',
    fontSize:15,
    color:'black',
    textDecorationStyles:'solid',
    fontStyles :'italic'
   
  },
  itemText1:{
    maxWidth:'100%',
    fontSize:18,
    color:'black',
    fontWeight:'italic'
  },
  circular:{
    width:12,
    height:12,
    borderColor:'#55BCF6',
    borderRadius:5,
    borderWidth:2
  }
})