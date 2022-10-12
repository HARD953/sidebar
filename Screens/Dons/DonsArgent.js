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
import { makePayment } from './paiement';
import Modal from "react-native-modal";


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

  function HeaderContent(props) {
    return(
      <View style={{height:200,backgroundColor:'#212F3D',justifyContent:'center',alignItems:'center',position:'relative'}}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>5000 FCFA</Text>
      </View>
    )
  }

  function Task(props){
    const [modal, setModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const backgroundColor = props.donateur === selectedId ? "white" : "white";
    const color = props.donateur === selectedId ? 'cyan' : 'black';
    const apihandler=()=>{
      setSelectedId(props.donateur)
      setModal(!modal)
    }
  
  return(
  <View>
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
  
  <Modal isVisible={modal}>
        <View style={{ flex: 1 ,backgroundColor:"#FFF",paddingVertical:20,paddingHorizontal:20,borderRadius:6}}>
          <TouchableOpacity onPress={() => setModal(!modal)} style={{justifyContent:'center',alignItems:'flex-end'}}>
            <Text style={{fontSize:15}}>X</Text>
          </TouchableOpacity>
          <View style={{height:200,backgroundColor:'#212F3D',justifyContent:'center',alignItems:'center',borderBottomWidth:2,borderColor:'red'}}>
           <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{props.montant}</Text>
          </View>
          <View style={{flex:1,marginTop:20,flexDirection:'column',justifyContent:'flex-start'}}>
          <View style={{flexDirection:'column',justifyContent:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
            <View>
              <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,color:'#2E4053'}}>Adresse</Text>
              <Text style={{fontSize:15}}>Adresse</Text>
            </View>
            <View>
              <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,color:'#2E4053'}}>Raison Sociale</Text>
              <Text style={{fontSize:15}}>Raison Sociale</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View>
              <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,color:'#2E4053'}}>A Electronique</Text>
              <Text style={{fontSize:15}}>A Electronique</Text>
            </View>
            <View>
              <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,color:'#2E4053'}}>Téléphone</Text>
              <Text style={{fontSize:15}}>Téléphone</Text>
            </View>
          </View>
          </View>
        </View>
          <TouchableOpacity onPress={()=>setModal(!modal)} style={{
            justifyContent:'center',
            alignItems:'center',
            paddingVertical:10,
            backgroundColor:'#617eb7',
            elevation:2,
            borderRadius:9}}>
            <Text  style={{fontSize:15,fontWeight:'bold',color:'#fff'}}>RETIRER</Text>
          </TouchableOpacity>
        </View>
      </Modal>
  </View>
  )
  }
  
  export default function Argent({navigation}){

  
  // const [data2,setData2]=useState([])
  // const [loading2,setLoading2]=useState(true)
  // 
  const {userInfo,logout}=useContext(AuthContext)
  const url2="https://apivulnerable.herokuapp.com/efdoargent/"
  const [data2,setData2]=useState([])
  const [loading2,setLoading2]=useState(true)
  useEffect(()=>{
  fetch(url2, { 
    method:'GET',
    headers: new Headers({
        'Authorization':  `Bearer ${userInfo.access}`,  
    }),
  })
  .then((res)=>res.json())
  .then((json)=>setData2(json.data))
  .catch((error)=>console.log(error))
  .finally(()=>setLoading2(false))
  },[])

  console.log(data2)
  
  // const url2='https://apivulnerable.herokuapp.com/criterechef/'
  //   useEffect(()=>{
  //     fetch(url2)
  //     .then((res)=>res.json())
  //     .then((json)=>setData2(json.data[0]))
  //     .catch((error)=>console.log(error))
  //     .finally(()=>setLoading2(false))
  //   },[])

  return(
  <View style={{flex:1,justifyContent:'center'}}>
  <ScrollView >
        {  
              data2.map((items,index)=>{
                  return(
                    <Task donateur={items.beneficiaire} provider={items.donateur} typeDons={items.typeDons} montant={items.montant} />
                  )
                })
              
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