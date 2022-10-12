import React from "react";
import { Text,View,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class  Donateur extends React.Component{
render(){
    const  {nature,nom,date,urls}=this.props.don
    return(
        <TouchableOpacity onPress={() => alert('This is a button!')} style={{alignItems:'center',marginHorizontal:'2%',borderRadius:2}}>
            <Image source={urls} style={{width:150,height:150}}></Image>
            <Text style={{textAlign:'center',fontWeight:'bold'}}>{nature}</Text>
            <Text>{nom}</Text>
            <Text>{date}</Text>
        </TouchableOpacity>
    )
}
}

export default Donateur;