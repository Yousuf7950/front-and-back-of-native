import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet, Touchable,SafeAreaView,
    Image,
    TouchableOpacity,
  } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";


 const TroubleshootScreen=()=>{
//     const clickHandler = () => {
//         //function to handle click on floating Action Button
//         alert('Floating Button Clicked');
//       };
const navigation=useNavigation();
    return(
        
        <SafeAreaView style={styles.over}>
             <View style={styles.header}>
            <Text style={{color:'white',fontWeight:'700'}}>Troubleshoot</Text>
            
        </View>
        <View style={styles.over}>
         
          <TouchableOpacity
          onPress={()=>navigation.navigate('Home')}
            activeOpacity={0.7}
            
            style={styles.touchableOpacityStyle}>
            <Image
              source={require('../images/home.png')}
            //   source={{
            //     uri:
            //       'http://iconsetc.com/icons-watermarks/flat-circle-white-on-black/bfa/bfa_home/bfa_home_flat-circle-white-on-black_512x512.png',
            //   }}
             
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}
export default TroubleshootScreen;

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
    over: {
        flex: 1,
        backgroundColor: 'white',
       
      },
      titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
      },
      textStyle: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
      },
      touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
      floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
      },
})