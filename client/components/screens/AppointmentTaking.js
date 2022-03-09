// import React,{useState,useEffect} from "react";
// import {View,Text,Button,StyleSheet, Touchable, Image,  Dimensions,SafeAreaView,TextInput} from 'react-native';
// // https://github.com/react-native-datetimepicker/datetimepicker

// import DatePicker from 'react-native-datepicker'
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// import React from 'react'

// export const AppointmentTaking = () => {
//   const [name, setName] = useState("");
//   const [car_number,setCarnumber]=useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [phone_number,setPhone]=useState("");
//   const [email,setEmail]=useState("");

//   const [appointmentList, setAppointmentList] = useState([]);

//   const addAppointment = () => {
//     Axios.post("http://localhost:5001/createAppointment", {
//       name: name,
//       car_number:car_number,
//       date:date,
//       time:time,
//       phone_number:phone_number,
//       email:email,
//     }).then(() => {
//     }
//     )
//   };

//   return (
//     <TextInput placeholder="Enter Name" style={styles.input} onChangeText={(text)=>this.setState({name:text})}/>

//   )
// }
