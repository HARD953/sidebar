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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar1 } from "../../Components/style1";
import DetailScreen1 from "./detail";

function HeaderContent() {
    return(
      <View style={{height:'30%',backgroundColor:'#212F3D',justifyContent:'center',alignItems:'center',position:'relative'}}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>5000 FCFA</Text>
      </View>
    )
  }

  function LogoTitle() {
    return (  
      <Image
        style={{height: 150}}
        source={require('../../assets/img/habit.jpg')}
      />
    );
  }


const Tab=createMaterialTopTabNavigator();

export default function StackNav(){
    return(
        <>
        <HeaderContent/>
        <Tab.Navigator style={{justifyContent:'space-between'}}
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarScrollEnabled:true,
                headerTitle:"issa",
                tabBarItemStyle: { width: 220,height:55 },
                
                // tabBarStyle: { backgroundColor: 'powderblue' },
            }}>
            
            <Tab.Screen style={{color: 'red',}} options={{
                title: ({ color, focused }) => (
                //   <Ionicons
                //     size={45}
                //     name={focused ? 'home' : 'home-outline'}
                //     color={focused ? 'blue' : '#272727'}
                //   />
                <Avatar1 resizeMode="cover" source={require('../../assets/img/aide.jpg')} />
                ),
              }} name="Actif Courant" component={Argent} />
            <Tab.Screen options={{
                 title: ({ color, focused }) => (
                //   <Ionicons
                //     size={45}
                //     name={focused ? 'home' : 'home-outline'}
                //     color={focused ? 'blue' : '#272727'}
                //   />
                <Avatar1 resizeMode="cover" source={require('../../assets/img/aide1.jpg')} />
                ),
              }} name="Actif Non Courant" component={Argent} />
        </Tab.Navigator>
        </>
    )
}