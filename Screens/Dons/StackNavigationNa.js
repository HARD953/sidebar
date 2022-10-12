import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dargent from "./Dargent";
import Dnature from "./Dnature";
import Dgeneral from "./Dgeneral";
import Urgence from "../Connexion/Urgence";
import { View,Text,Image } from "react-native";
import Argent from "./DonsArgent";
import Nature from "./DonsNature";

import { Avatar1 } from "../../Components/style1";
import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailScreen1 from "./detail";
const Tab=createMaterialTopTabNavigator();

function LogoTitle() {
    return (  
      <Image
        style={{height: '30%',resizeMode:'cover',width:'100%'}}
        source={require('../../assets/img/f1.jpg')}
      />
    );
  }

function HeaderContent() {
    return(
      <View style={{height:200,backgroundColor:'#212F3D',justifyContent:'center',alignItems:'center',position:'relative'}}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>5000 FCFA</Text>
      </View>
    )
  }



const StackNavigationNa = () => {
    return(
        <>
        <LogoTitle />
        <Tab.Navigator 
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                
                tabBarScrollEnabled:true,
                headerTitle:"issa",
                tabBarItemStyle: { width: 220,height:50 },
                // tabBarStyle: { backgroundColor: 'blue' },
            }}>
            
            <Tab.Screen style={{marginHorizontal:10}}
            options={{
                tabBarShowLabel:true,
                title: ({ color, focused }) => (
                    <Avatar1 resizeMode="cover" source={require('../../assets/img/re1.jpg')} />),
              }} name="Actif Courant" component={Nature} />
            <Tab.Screen options={{
                title: ({ color, focused }) => (
                //   <Ionicons
                //     size={45}
                //     name={focused ? 'home' : 'home-outline'}
                //     color={focused ? 'blue' : '#272727'}
                //   />
                <Avatar1 resizeMode="cover" source={require('../../assets/img/de2.jpg')} />
                ),
              }} name="Actif Non Courant" component={Nature} />
        </Tab.Navigator>
        </>
        )
}

export default StackNavigationNa