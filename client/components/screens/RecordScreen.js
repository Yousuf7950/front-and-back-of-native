import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet, Touchable} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";


const RecordScreen=()=>{
    
 
    return(
        <ScrollView>
            <View style={styles.header}>
                <Text style={{color:'white',fontWeight:'700'}}>Records</Text>
                
            </View>
            {/* <Text>Account Information</Text> */}
        </ScrollView>
    );
}
export default RecordScreen;

const styles=StyleSheet.create({
    header:{
        // flex:1,
       // marginTop:10,
        height:35,
    backgroundColor:'#5D3FD3',
    color:'white',
    fontWeight:'700',
    justifyContent:'center',
    alignItems:'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.25,
    
    },
})