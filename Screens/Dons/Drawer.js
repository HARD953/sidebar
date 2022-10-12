import { View, Text,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabBottom from './BottomTab';
import {Logo} from "../../Components/style1";
import Detail from './scrol'; 
import CustumerContent from './CustumerContent';
import Dargent from "./Dargent";
import Dnature from "./Dnature";
import Dgeneral from "./Dgeneral";
import Urgence from "../Connexion/Urgence";
import Login from '../Connexion/Login';
import { StatusBar } from 'react-native';
import Setting from '../Connexion/Setting';
import { AuthContext } from '../../Components/globalContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { useContext } from 'react';



const DrawerTab=createDrawerNavigator();
const Drawer = () => {
  const {userInfo,logout}=useContext(AuthContext)
  const url="https://apivulnerable.herokuapp.com/detailadimn/"
  const [data,setData]=useState("")
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    getListTrans1();
    return()=>{
    }
  },[])

  getListTrans1=()=>{
    fetch(url, { 
      method:'GET',
      headers: new Headers({
          'Authorization':  `Bearer ${userInfo.access}`,  
      }),
  })
    .then((res)=>res.json())
    .then((json)=>setData(json.data[0]))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  }
  const urls=`https://apivulnerable.herokuapp.com${data.profile_image}`
  return (
        <DrawerTab.Navigator style={{ paddingTop: StatusBar.currentHeight }}
        initialRouteName='TabBottom' 
        drawerContent={props => <CustumerContent {...props} />}
        screenOptions={
          {
            headerStyle: {backgroundColor: '#FFF',},
            headerTintColor: 'black',
            headerTitleStyle: {fontWeight: 'normal', fontStyle:'normal'},
            headerRight: () => (
              <Image source={{uri:urls}} style={{width:40,height:40,borderRadius:50}}/>
            )
            }}>
            {/* <DrawerTab.Screen component={TabBottom} name="TabBottom                 "></DrawerTab.Screen>
            <DrawerTab.Screen component={Detail} name="Detail                 "></DrawerTab.Screen> */}
            
            <DrawerTab.Screen component={TabBottom} name="Menu"></DrawerTab.Screen>
            <DrawerTab.Screen component={Dargent} name="Dargent"></DrawerTab.Screen>
            <DrawerTab.Screen component={Urgence} name="Urgence"></DrawerTab.Screen>
            <DrawerTab.Screen component={Setting} name="Modification"></DrawerTab.Screen>
            
        </DrawerTab.Navigator>
  )
}
export default Drawer