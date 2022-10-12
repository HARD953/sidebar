// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { View,Text,Button,Image, TouchableOpacity,StyleSheet } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import React from "react";
// import { StyledButton,ButtonText,Avatar, Line,Logo,Avatar1 } from "./Components/style1";
// import Ionicons from 'react-native-vector-icons/Ionicons';

// function LogoTitle() {
//   return (  
//     <Image
//       style={{height: 150}}
//       source={require('./assets/img/aide1.jpg')}
//     />
//   );
// }

// function Task(props){
//   return(
//     <TouchableOpacity style={styles.item}>
//       <View style={styles.itemLeft}>
//         <Text style={styles.itemText}>{props.text}</Text>
//         <Text style={styles.itemText}>{props.text}</Text>
//       </View>
//       <View style={styles.itemLeft}>
//         <Text style={styles.itemText1}>issa</Text>
//         <Text style={styles.itemText1}>issa</Text>
//       </View>
//     </TouchableOpacity>
//   )
// }

// function Task1(props){
//   return(
//     <TouchableOpacity style={styles.item}>
//       <View style={styles.itemLeft}>
//         <Text style={styles.itemText}>{props.text}</Text>
//       </View>
//       <View>
//       <Logo resizeMode="cover" source={require('./assets/img/aide1.jpg')} />
//       </View>
//     </TouchableOpacity>
//   )
// }

// function HeaderContent() {
//   return(
//     <View style={{height:150,backgroundColor:'#34495E',justifyContent:'center',alignItems:'center',position:'relative'}}>
//       <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>5000 FCFA</Text>
//     </View>
//   )
// }

// const Tab=createBottomTabNavigator();
// const Stack=createStackNavigator();
// const Drawer=createDrawerNavigator();

// function HomeScreen({navigation}){
//   const [people,setPeople]=React.useState([
//     {name:"ouedraogo",key:1},
//     {name:"kone",key:2},
//     {name:"franck",key:3},
//     {name:"kouassi",key:4},
//     {name:"konan",key:5},
//     {name:"yao",key:6},
//     {name:"yapi",key:7},
//     {name:"yapa",key:8},
//     {name:"yapa",key:8},
//     {name:"yapa",key:8},
//     {name:"yapa",key:8}
//   ])
//   return(
//     <View style={{flex:1,justifyContent:'center'}}>
//     <ScrollView >
//       <HeaderContent />
//           {
//             people.map((items)=>{
//               return(
//                 <Task text={items.name} />
//               )
//             })
//           }
//       </ScrollView>
//   </View>
//   )
// }

// function HomeScreenDetail({navigation}){
//   const [people,setPeople]=React.useState([
//     {name:"ouedraogo",key:1},
//     {name:"kone",key:2},
//     {name:"franck",key:3},
//     {name:"kouassi",key:4},
//     {name:"konan",key:5},
//     {name:"yao",key:6},
//     {name:"yapi",key:7},
//     {name:"yapa",key:8},
//     {name:"yapa",key:8},
//     {name:"yapa",key:8},
//     {name:"yapa",key:8}
//   ])
//   return(
//     <View style={{flex:1,justifyContent:'center'}}>
//     <ScrollView >
//     <LogoTitle />
//           {
//             people.map((items)=>{
//               return(
//                 <Task text={items.name} />
//               )
//             })
//           }
//       </ScrollView>
//   </View>
//   )
// }




// const navOptionHandle=()=>({
//   headerShown:false
// })

// function HomeStack(){
//   return(
//     <Drawer.Navigator initialRouteName="HomeScreen"
//         screenOptions={({route})=>({
//             tabBarIcon: ({focused, color, size})=>{
//               let iconName;
//               if (route.name=="HomeScreen"){
//                 iconName ="wallet"
//               } else if (route.name =="HomeScreenDetail"){
//                 iconName ="fast-food"
//               } else if (route.name =="DonsArgent"){
//                 iconName ="cash"
//               }
//               return <Ionicons name={iconName} size={30} color='blue' />
//             },
//             headerShown:true,
//             headerRight: () => (<Logo resizeMode="cover" source={require('./assets/img/aide1.jpg')} />
//             )
//           })}>
//       <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//       <Drawer.Screen name="HomeScreenDetail" component={HomeScreenDetail} />
//    </Drawer.Navigator>
//   )
// }

// function SettingStack(){
//   return(
//       <Drawer.Navigator initialRouteName="HomeScreenDetail"
//       screenOptions={({route})=>({
//         tabBarIcon: ({focused, color, size})=>{
//           let iconName;
//           if (route.name=="HomeScreen"){
//             iconName ="wallet"
//           } else if (route.name =="HomeScreenDetail"){
//             iconName ="fast-food"
//           } else if (route.name =="DonsArgent"){
//             iconName ="cash"
//           }
//           return <Ionicons name={iconName} size={30} color='blue' />
//         },
//         headerShown:true,
//         headerRight: () => (<Logo resizeMode="cover" source={require('./assets/img/aide1.jpg')} />
//         )
//       })}>
//         <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//         <Drawer.Screen name="HomeScreenDetail" component={HomeScreenDetail} />
//      </Drawer.Navigator>
//   )
// }

// function App(){
//   return(
//       <NavigationContainer>
//         <Tab.Navigator 
//         initialRouteName="HomeScreenDetail"
//         screenOptions={({route})=>({
//           tabBarIcon: ({focused, color, size})=>{
//             let iconName;
//             if (route.name=="HomeStack"){
//               iconName ="wallet"
//             } else if (route.name =="SettingStack"){
//               iconName ="fast-food"
//             } else if (route.name =="DonsArgent"){
//               iconName ="cash"
//             }
//             return <Ionicons name={iconName} size={30} color='#283747' />
//           },
//           headerShown:false,
//           tabBarActiveTintColor: 'red',
//           tabBarInactiveTintColor: 'gray',
//           tabBarShowLabel: false,
//           abBarStyle: {
//           position: 'absolute',
//           backgroundColor: 'blue',
//           borderRadius: 50,
//           bottom: 20,
//           marginHorizontal: 16
//                 },
//           headerRight: () => (<Logo resizeMode="cover" source={require('./assets/img/aide1.jpg')} />
//           )
//         })}>
//           <Tab.Screen name="HomeStack" component={HomeStack} />
//           <Tab.Screen name="SettingStack" component={SettingStack} />
//         </Tab.Navigator>
//       </NavigationContainer>
//   )
// }

// export default App;

// const styles=StyleSheet.create({
//   item:{
//     backgroundColor:'#FFF',
//     padding: 15,
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent:'space-between',
//     position:'relative',
//     height:100

//   },
//   itemLeft:{
//     flexDirection:'column',
//     alignItems:'center',
//     flexWrap:'wrap'
//   },
//   square:{
//     width:24,
//     height:24,
//     backgroundColor:'#55BCF6',
//     opacity:0.4,
//     borderRadius:5,
//     marginRight:15
//   },
//   itemText:{
//     maxWidth:'100%',
//     fontSize:18,
//     color:'blue',
//     fontWeight:'bold'
//   },
//   itemText1:{
//     maxWidth:'100%',
//     fontSize:18,
//     color:'blue',
//     fontWeight:'bold'
//   },
//   circular:{
//     width:12,
//     height:12,
//     borderColor:'#55BCF6',
//     borderRadius:5,
//     borderWidth:2
//   }
// })

// import Drawer from "./Screens/Dons/Drawer";
// import Login from "./Screens/Connexion/Login";
// import SignUp from "./Screens/Connexion/SignUp";
// import Welcome from "./Screens/Connexion/Welcome";

// import { View, Text } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <Login />
//   )
// }

// export default App

// import Drawer from "./Screens/Dons/Drawer";
// import Login from "./Screens/Connexion/Login";
// import StackNav from "./Screens/Dons/StackNavigator";
// import { View, Text } from 'react-native'
// import React from 'react'
// import HomeScreen from "./Screens/Dons/Home";

// const App = () => {
//   return (
//     <View style={{flex: 1}}>
//       <Drawer />
//     </View>
    
//   )
// }

// export default App

// import React, { useState } from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });


import Drawer from "./Screens/Dons/Drawer";
import Login from "./Screens/Connexion/Login";
import SignUp from "./Screens/Connexion/SignUp";
import Welcome from "./Screens/Connexion/Welcome";

import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { AuthProvider } from "./Components/globalContext";
import Navigators from "./Components/navigation/Navigators";
import reactDocumentTitle from "react-document-title";
import { useEffect } from "react";

// function Script(){
//   return(
//     <reactDocumentTitle title="paiement">
//       <script src="https://cdn.cinetpay.com/seamless/main.js"></script>
//     </reactDocumentTitle>
//   )
// }

// const useScript = url => {
//   useEffect(() => {
//     const script = React.createElement('script');

//     script.src = url;
//     script.async = true;

//     React.body.appendChild(script);

//     return () => {
//       React.body.removeChild(script);
//     }
//   }, []);
// };

// const MyComponent = () => {
//   useScript("https://cdn.cinetpay.com/seamless/main.js");
// }

const App = () => {
  return (
    <AuthProvider>
      <StatusBar  backgroundColor="#06bcee" />
      <Navigators />
    </AuthProvider>  
  )
}

export default App

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet,Text,View } from "react-native";
// import { useEffect, useState } from "react";
// import * as LacalAuthentication from 'expo-local-authentication'
// export default function App(){
//   const [isauthenticate,setIsauthenticate]=useState(false)
//   useEffect(()=>{
//     async function authenticate(){
//       const result=await LacalAuthentication.authenticateAsync();
//       setIsauthenticate(result.success)
//     }
//     authenticate();

//   },[]);
//   return(
//     <View>
//       <Text style={styles.container}>
//         {isauthenticate? "bienvenue":"hummm acces denie"}
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   )
// }

// const styles =StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'black',
//     alignItems:'center',
//     justifyContent:'center'
//   }
// })