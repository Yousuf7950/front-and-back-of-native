
const AppointmentScreen2=()=>{
    const [text, onChangeText] = React.useState(null);
    const [email,setEmail]=React.useState(null);
    const [car,setCar]=React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    return(
        
        <ScrollView style={{backgroundColor:'white'}}>
              <View style={styles.header}>
            <Text style={{color:'white',fontWeight:'700'}}>Appointment</Text>
            
        </View>
           <View style={styles.container}>
            <Image source={require('../images/appointment.jpg')} style={{height: '100%', width, resizeMode: 'contain'}}></Image>
           </View>

           <View style={styles.container1}>
              
             <TextInput
                 style={styles.input}
                 onChangeText={(text)=>this.setState({name:text})}
                
                 placeholder="Enter Name"
             />
              {/* <TextInput
               style={styles.input}
                 onChangeText={onChangeNumber}
                  value={email}
                 placeholder="Enter Email"
             
              />
               <TextInput
               style={styles.input}
                 onChangeText={onChangeNumber}
                  value={number}
                 placeholder="Enter Phonenumber"
                 keyboardType="numeric"
              />
               <TextInput
               style={styles.input}
                 onChangeText={onChangeNumber}
                  value={car}
                 placeholder="Enter Car Number"
               
              /> */}
              
           </View>
           {/* <View style={styles.container2}>
        <TouchableOpacity style={styles.button}  onPress={showDatepicker} ><Text style={{color:'#5D3FD3'}}>Select Date</Text></TouchableOpacity>
   
      <TouchableOpacity style={styles.button}  onPress={showTimepicker} ><Text style={{color:'#5D3FD3'}}>Select Time</Text></TouchableOpacity>

      </View> */}

      {/* {show && (
        <DateTimePicker 
       
     
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )} */}
      <View style={{marginTop:10}}> 
          <TouchableOpacity style={styles.button1} onPress={()=>this.submit()}><Text style={{color:'white'}}>Submit</Text></TouchableOpacity>
      </View>
           </ScrollView>
    );
}
//export default AppointmentScreen;
