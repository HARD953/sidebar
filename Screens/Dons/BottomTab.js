import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Nature from "./DonsNature"
import Argent from "./DonsArgent"
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNav from "./StackNavigator";
import StackNavigationNa from "./StackNavigationNa";
import Home1 from "./Home1";
import Home2 from "./Home2";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function TabBottom(){
    return(
        <Tab.Navigator 
          activeColor="#f0edf6"
          inactiveColor="#648CBD"
          barStyle={{ backgroundColor: '#694fad',justifyContent:'space-between',paddingHorizontal:10 }}
          
            screenOptions={({route})=>({
            
            tabBarIcon: ({focused, color, size})=>{
              let iconName;
              if (route.name=="Argent"){
                iconName ="wallet"
              } else if (route.name =="Objet"){
                iconName ="fast-food"
              } else if (route.name =="Home"){
                iconName ="cash"
              }
              return <Ionicons style={{fontSize:30,width:'100%',fontWeight:'bold'}} name={iconName}  color={focused ? 'white':'#648CBD'} />
            },
            // headerShown:false,
            // tabBarShowLabel: true,
            
            // tabBarStyle:{
            //     backgroundColor: '#000301',
            //     borderBottomWidth:1,
               
            //     marginBottom:1,
            //     borderBottomEndRadius:1,
            //     borderBottomStartRadius:67,
            //     fontSize:40
              
            // },
            // tabBarLabelStyle: {  fontSize: 40 },
          })}
        >
            <Tab.Screen  name="Argent" component={StackNav}/>
            <Tab.Screen name="Objet" component={StackNavigationNa}/>
            
        </Tab.Navigator>
    )
}

