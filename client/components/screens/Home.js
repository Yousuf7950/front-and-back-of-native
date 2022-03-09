import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet, Touchable} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen=()=>{
    
  const navigation=useNavigation();
    const [powderblue, setPowderblue] = useState({
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
      });
      const [skyblue, setSkyblue] = useState({
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 100,
      });
      const [steelblue, setSteelblue] = useState({
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 200,
      });
  const  handleSignOut=()=>{
      auth
      .signOut()
      .then(()=>{
      navigation.replace('Login')}
      
      )
      .catch(error=>alert(error.message))
  }
    return(
        <View>
            <View style={styles.container3}>
                <Text style={{color:'white',fontWeight:'700'}}>Intelligent Car Expert</Text>
                
            </View>
            <View style={styles.container4}>
            <View style={styles.container5}>
                <Text style={{color:'black',fontWeight:'700',fontSize:20}}><Text style={{color:'#f5bd1f'}}>Auto</Text>mation in your hand<Text style={{color:'#f5bd1f'}}>...</Text></Text>
                <Text>{auth.currentUser?.email}</Text>
                <View style={styles.buttonContainer}  >
                <TouchableOpacity style={{backgroundColor:'#f5bd1f',width:'30%',alignItems:'center',borderRadius:10,height:30,justifyContent:'center'}} onPress={handleSignOut}><Text>  Sign out</Text></TouchableOpacity>
                </View>
                </View>
            
                 
             
            </View>
            
            <Text style={{color:'black',fontWeight:'700',fontSize:20,paddingLeft:15,margin:5}}>The world of automation.<Text style={{color:'#f5bd1f'}}>...</Text></Text>

            <View style={styles.container2}>
               
            <TouchableOpacity style={styles.square} onPress={()=>navigation.navigate('Appointment')} >
                <FontAwesome name="calendar" size={30} color={"#5D3FD3"}></FontAwesome>
                <Text>Appointment</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.square} onPress={()=>navigation.navigate('Trouble')}>
                <FontAwesome name="gears" size={30} color={"#5D3FD3"}></FontAwesome>
                <Text>Troubleshoot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square} onPress={()=>navigation.navigate('Mechanic')}>
                <FontAwesome name="map-marker" size={30} color={"#5D3FD3"}></FontAwesome>
                <Text>Mechanic</Text>
            </TouchableOpacity>
        
      </View>
      <View style={styles.container2}>
            
            <TouchableOpacity style={styles.square} onPress={()=>navigation.navigate('Service')}>
                <FontAwesome name="handshake-o" size={30} color={"#5D3FD3"}></FontAwesome>
                <Text>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square} onPress={()=>navigation.navigate('Record')}>
                <FontAwesome name="list-alt" size={30} color={"#5D3FD3"}></FontAwesome>
                <Text>Record</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square} onPress={()=>navigation.navigate('Setting')}>
                <FontAwesome name="cog" size={30} color={"#5D3FD3"} ></FontAwesome>
                <Text>Settings</Text>
            </TouchableOpacity>
        
      </View>
     
            
         
           
           
{/*            
            <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}>
                <Text style={styles.buttonText}>
                    Logout
                </Text>
            </TouchableOpacity> */}
      
        </View>
    );
}
export default HomeScreen;

const styles=StyleSheet.create({
    container3:{
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
    container4:{
        // flex:1,
       // marginTop:10,
        height:120,
    backgroundColor:'#5D3FD3',
    color:'white',
    fontWeight:'700',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    width:'100%',
    
    
    },
    container5:{
        // flex:1,
       // marginTop:10,
        height:105,
    backgroundColor:'white',
    color:'white',
    fontWeight:'700',
    // justifyContent:'center',
    // alignItems:'center',
    width:'100%',
    padding:10,
    borderRadius:10,
    
    
    
    },
    container:{
        // flex:1,
        alignItems:'center',
        justifyContent:'center',
       
    },
  
    
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    buttonContainer:{
        flex:1,
        width:'100%',
        justifyContent:'flex-end',
        
        
     
        // border:'10px solid red'
    },
    button:{
        backgroundColor:'#5D3FD3',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
    },
    
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#5D3FD3',
        borderWidth:2,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,    },
    buttonOutlineText:{
        color:'#5D3FD3',
        fontWeight:'700',
        fontSize:16,  

    },
    container2: {
        
        // flex:1 ,
        // backgroundColor:'red',
        marginTop:10,
        flexDirection: "row",
        justifyContent:'center',
       
        
      },
    square: {
        backgroundColor: "white",
        width: 90,
        height: 90,
        margin: 8,
        borderRadius:5,
        shadowColor: "#000",
        alignItems:'center',
        justifyContent:'center',
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
      },
square1: {
        backgroundColor: "white",
        width: 90,
        height: 90,
        margin: 8,
        borderRadius:5,
        shadowColor: "#000",
        alignItems:'center',
        justifyContent:'center',
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
      },
      
})