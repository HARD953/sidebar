import { View, Text, Image,StyleSheet, TouchableOpacity, Button} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import React,{useState,useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dargent from "./Dargent";
import Dnature from "./Dnature";
import Dgeneral from "./Dgeneral";
import Urgence from "../Connexion/Urgence";
import { NavigationContainer } from '@react-navigation/native';
import { Line } from '../../Components/style1';
import { AuthContext } from '../../Components/globalContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { useContext } from 'react';



const CustumerContent = (props) => {
   const [selectedId, setSelectedId] = useState(null);
   const {userInfo,logout}=useContext(AuthContext)

  const url="https://apivulnerable.herokuapp.com/detailadimn/"
  const [data,setData]=useState("")
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
    .then((json)=>setData(json.data[0]))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  }

  const urls=`https://apivulnerable.herokuapp.com${data.profile_image}`
  const listArray=[
    {
        urls:require("../../assets/img/r1.jpg"),title:'Detail General',lien:"Dgeneral"
    },
    {
        urls:require("../../assets/img/u3.jpg"),title:'Urgence',lien:"Urgence"
    },
    {
        urls:require("../../assets/img/st.png"),title:'Modification',lien:"Parametre"
    }
];

const bottomList=[
  {
      urls:require("../../assets/img/d2.png"),title:'Deconnexion',lien:"Deconnexion"
  },
  {
      urls:require("../../assets/img/s1.png"),title:'Modification',lien:"Parametre"
  }

];
const Item =({title,urls,onPress,backgroundColor,color,lien,index})=>(
  <TouchableOpacity style={[styles.item,{backgroundColor:backgroundColor}]} onPress={()=>{onPress(index)}}>
    <Image source={urls} style={{width:30,height:30,borderRadius:30}}></Image>
    <Text style={[styles.title,{color:color}]}>
      {title}
    </Text>
    
  </TouchableOpacity>
)

const renderItem =({item,index})=>{
  const backgroundColor = item.title === selectedId ? "#AED6F1" : "white";
  const color = item.title === selectedId ? 'cyan' : 'black';
  return(
  <Item title={item.title} urls={item.urls} lien={item.lien} index={index} onPress={() => {
    setSelectedId(item.title);
    props.navigation.navigate(props?.state?.routes[index+1].name);}} backgroundColor={ backgroundColor } textColor={ color }/>)
}

  return ( 
    
    <View style={{flex:1}}>
      <View style={{flex:0.3,paddingTop:50,paddingHorizontal:20}}>
        <Image source={{uri:urls}} style={{width:70,height:70,borderRadius:50}}/>
        <Text style={{fontWeight:'bold',fontSize:22,marginTop:1}}>{data.first_name}</Text>
        <Text>{data.user_name}</Text>
        <Text>60 ans</Text>
        <Text style={{fontSize:15}}>Vulnerabilité Physique</Text>
      </View>
      <View  style={{flex:0.5}}>
      <FlatList data={listArray}
          keyExtractor={(item,index)=>index.toString()}
          renderItem={renderItem}>
        </FlatList>
      </View>
      <View style={[styles.item]}>
      <TouchableOpacity onPress={logout} style={{flexDirection:'row',justifyContent:'flex-start'}}>
        <Image source={require('../../assets/img/fond.jpg')} resizeMode='cover' style={{width:30,height:30,borderRadius:30}}/>
        <Text style={{fontSize:16,paddingHorizontal:20}}>Deconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustumerContent;

// const Stack=createStackNavigator();

function StackNav(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Dargent" component={Dargent} />
            <Stack.Screen name="Dnature" component={Dnature} />
            <Stack.Screen name="Dgeneral" component={Dgeneral} />
            <Stack.Screen name="Urgence" component={Urgence} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    paddingVertical:10,
    marginHorizontal: 16,
    flexDirection:'row',
    justifyContent:'flex-start',
    
  },
  title: {
    fontSize: 16,
    marginLeft:15,
    marginTop:10,
  },
});