import React, { useState,useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { color } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";
import { View,Text,Button,Image, TouchableOpacity,StyleSheet } from "react-native";
import { AuthContext } from '../../Components/globalContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { useContext } from 'react';
import Modal from "react-native-modal";
function LogoTitle() {
  return (  
    <Image
      style={{height: 150}}
      source={require('../../assets/img/habit.jpg')}
    />
  );
}

// function Task(props){
//   const {userInfo,logout}=useContext(AuthContext)
//   const [detail,setdetail]=useState()
//   const apihandler=()=>{
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
          
function Task(props)
{
  const [modal1, setModal1] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const backgroundColor = props.donateur === selectedId ? "white" : "white";
  const color = props.donateur === selectedId ? 'cyan' : 'black';
  const apihandler1=()=>{
    setSelectedId(props.donateur)
    setModal1(!modal1)
  }

return(
  <View>
  <TouchableOpacity onPress={apihandler1}  style={[styles.item,{backgroundColor:backgroundColor}]}>
    <View style={styles.itemLeft}>
      <Text style={styles.itemText}>{props.provider}</Text>
    </View>
    <View style={styles.itemLeft}>
      <Image source={{uri:`https://apivulnerable.herokuapp.com${props.profile}`}} resizeMode="cover" style={{width:35,height:35,borderRadius:10,marginBottom:10}} />
    </View>
</TouchableOpacity>
<Modal isVisible={modal1}>
      <View style={{ flex: 1 ,backgroundColor:"#FFF",paddingVertical:20,paddingHorizontal:20,borderRadius:6}}>
        <TouchableOpacity onPress={() => setModal1(!modal1)} style={{justifyContent:'center',alignItems:'flex-end'}}>
          <Text style={{fontSize:15,color:"red"}}>X</Text>
        </TouchableOpacity>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Etat:bon</Text>
        <Image source={{uri:`https://apivulnerable.herokuapp.com${props.profile}`}} resizeMode="cover" style={{width:'100%',height:'40%',borderRadius:10,marginBottom:10}} />
        <View style={{flex:1,marginTop:20,flexDirection:'column',justifyContent:'flex-start'}}>
          <View style={{flexDirection:'column',justifyContent:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
            <View>
              <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,color:'#1B2631'}}>Adresse</Text>
              <Text style={{fontSize:15}}>Adresse</Text>
            </View>
            <View>
              <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,color:'#1B2631'}}>Raison Sociale</Text>
              <Text style={{fontSize:15}}>Raison Sociale</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
              <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,color:'#1B2631'}}>A Electronique</Text>
              <Text style={{fontSize:15}}>A Electronique</Text>
            </View>
            <View>
              <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,color:'#1B2631'}}>Téléphone</Text>
              <Text style={{fontSize:15}}>Téléphone</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View>
              <Text style={{fontSize:17,fontWeight:'bold',marginTop:10,color:'#1B2631'}}>Lieu De Reception</Text>
            </View>
            <View>
              <Text style={{fontSize:17,marginTop:10,color:'#1B2631'}}>Abidjan</Text>
            </View>
          </View>
          </View>
        </View>
        <TouchableOpacity onPress={()=>setModal1(!modal1)} style={{
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


export default function Nature({navigation}){
  
  const {userInfo,logout}=useContext(AuthContext)
  const url2="https://apivulnerable.herokuapp.com/efdoobjet/"
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

  return(
    <View style={{flex:1,justifyContent:'center'}}>
    <ScrollView >
          {
                  data2.map((items,index)=>{
                    return(
                      <Task donateur={items.beneficiaire} provider={items.donateur} typeDons={items.typeDons} profile={items.photo} />
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
    width:30,
    height:30,
    borderColor:'#55BCF6',
    borderRadius:10,
    borderWidth:2
  }
})

