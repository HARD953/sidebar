import { Dimensions, View,Text,StyleSheet ,FlatList, Image} from "react-native"
import React,{useStatte,useEffect} from "react";

const SRC_WIDTH=Dimensions.get("window").width;
const CARD_LENGHT=SRC_WIDTH*0.8
const SPACING=SRC_WIDTH *0.02;
const SIDECARD_LENGHT =(SRC_WIDTH*0.18)/2;

interface itemProps{
    index:number, 
}
function Item({index}: itemProps){
    return(
        <View style={[styles.card,{
            marginLeft:index==0 ? SIDECARD_LENGHT:SPACING,
            marginRight:index ==2 ? SIDECARD_LENGHT:SPACING, 
        }]}>
            <Image source={require("../../assets/img/aide1.jpg")} style={{width: "100%",height:"100%"}}/>
        </View>
    )
}

export default function Carousels(){
    const DATA=[
        {
            id:1,
            title:"issa",
        },
        {
            id:2,
            title:"kone",
        },
        {
        
            id:3,
            title:"kone",
        }
    ]
    return(
        <View>
            <FlatList
    
            horizontal={true} 
            data={DATA}
            renderItem={({item,index})=>{
                return(
                <Item index={index}/>
                )
            }}
            keyExtractor={(item)=>item.id}/>
        </View>
    )
}

const styles =StyleSheet.create({
    card:{
        width:CARD_LENGHT,
        height:150,
        overflow:'hidden'
    }
})