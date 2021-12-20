import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, View, Image, TouchableOpacity,Text,TextInput, ScrollView,PasswordInputText } from 'react-native';
import auth from '@react-native-firebase/auth';

function App() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    auth()
  .createUserWithEmailAndPassword(email,password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  if (!user) {
    return (
        <ScrollView>
        <View style={styles.container}>
          <View style= {styles.container0}>
            <Image style={styles.image2} source={require('../assets/imges/white.png')}/>
          </View>

          <Image style={styles.image1} source={require('../assets/imges/user.png')}/>
          <TextInput style={styles.input1} 
            placeholder="User name"
          />
          <TextInput style={styles.input2} 
            placeholder="Partner name"
          />

          <TextInput style={styles.input2} 
            placeholder="Wedding date"
          />

          <TextInput style={styles.input2} 
            placeholder="Email address"
            value={email}
            onChangeText={text=>setEmail(text)}
            
          />
          <TextInput style={styles.input2} 
            placeholder="Password"
            value={password}
            onChangeText={text=>setPassword(text)}
            secureTextEntry
          />
          

          <TouchableOpacity style={styles.button1}
              onPress={()=>{registration}}>
              
              <Text style={styles.buttontext}>Sing Up</Text>
          </TouchableOpacity> 
          <Text style={styles.text1}>Sign up with</Text>

          <View style ={styles.container1}>
            <Image style={styles.image3} source={require('../assets/imges/facebook.png')}/>
            <Image style={styles.image4} source={require('../assets/imges/google.png')}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#6E0606",
    },
  
     container0:{
      flexDirection:"row",
      
    },
  
    container1:{
      flexDirection:"row",
      justifyContent:"center",
      
  
    },
    
    
    image1:{
      height:150,
      width:150,
      alignSelf:"center",
      marginTop:5,
      borderColor:"white",
      borderWidth:3,
      borderRadius:100,
    },
  
    image2:{
      height:30,
      width:30,
      marginTop:20,
      marginLeft:15,
    },
    
    image3:{
      height:30,
      width:30,
      marginTop:20,
    },
  
    image4:{
      height:30,
      width:30,
      marginTop:20,
      marginLeft:25,
    },
  
  
    input1: {
  
      marginTop:50,
      backgroundColor: "white",
      width:300,
      height:55,
      borderRadius:20,
      alignSelf:"center",
      padding:20,
      borderColor:"#848482",
      borderWidth:3,
      
    },
  
    input2: {
  
      marginTop:10,
      backgroundColor: "white",
      width:300,
      height:55,
      borderRadius:20,
      alignSelf:"center",
      padding:20,
      borderColor:"#848482",
      borderWidth:3,
    },
  
    button1:{
      width:250,
      height:50,
      marginTop:50,
      backgroundColor:"#556080",
      borderRadius:500,
      alignSelf:"center",
      borderColor:"white",
      borderWidth:3,
     
    },
  
    buttontext:{
      fontStyle:"italic",
      fontSize:20,
      marginTop:10,
      alignSelf:"center", 
      color:"black" 
    },
  
    text1:{
      color:"white",
      fontStyle:"italic",
      marginTop:20,
      alignSelf:"center",
      fontSize:18,
      
    },
  
  });