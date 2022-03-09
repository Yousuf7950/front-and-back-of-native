import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet, Touchable, ScrollView,Image,Dimensions} from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";


const {width, height} = Dimensions.get('window');
const LoginScreen=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigation =useNavigation();
    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user=>{
            if(user){
                navigation.navigate('Home')
            }
        })
        return () => {
            unsub
        }
    }, [])
    const handleSignUp=()=>{
        //console.log("asds");
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials=>{
            const user=userCredentials.user;
            console.log(user.email);
        })
        .catch(error=>alert(error.message))
    }
    const handleLogin=()=>{
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials=>{
            const user=userCredentials.user;
            console.log(user.email);
        })
        .catch(error=>alert(error.message))
    }
    return(
        <ScrollView style={{backgroundColor:"white"}}>
             <View style={styles.main}>
            <Image source={require('../images/authpic.png')} style={{height: '100%', width, resizeMode: 'contain'}}></Image>
           </View>
        <View
            style={styles.container}
            behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email Adress"
                        value={email}
                        onChangeText={text=>{setEmail(text)}}
                        style={styles.input}
                        />
                     <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text=>setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                        />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={handleSignUp}
                        style={[styles.button,styles.buttonOutline]}>
                            <Text style={styles.buttonOutlineText}>Register</Text>
                        </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
    );
}
export default LoginScreen;

const styles=StyleSheet.create({
    main:{
        // flex:1,
       marginTop:20,
       marginBottom:15,
        height:200,
    backgroundColor:'white',
    color:'white',
    fontWeight:'700',
    justifyContent:'center',
    alignItems:'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.25,
    
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'#D3D3D3',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:10,
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
       
        marginTop:20,
     
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

    }
})