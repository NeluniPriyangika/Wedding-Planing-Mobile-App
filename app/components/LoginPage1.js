import React from 'react';
import { StyleSheet, View, Image,Text,TextInput } from 'react-native';

function LoginPage1(){
   
        return (
            <View style={styles.container}>
              <View style= {styles.container0}>
                <Image style={styles.image2} source={require('../assets/imges/white.png')}/>
              </View>

              <Image style={styles.image1} source={require('../assets/imges/user.png')}/>
              <TextInput style={styles.input1} 
                placeholder="User name"
              />
              <TextInput style={styles.input2} 
                placeholder="Password"
              />

              <View style={styles.button1}>
                  <Text style={styles.buttontext}>Login</Text>
              </View> 
              <Text style={styles.text1}>Forgod Password ?</Text>
            </View>

        );
}

export default LoginPage1;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },

   container0:{
    flexDirection:'row',
  
  },
  
  image1:{
    height:150,
    width:150,
    alignSelf:"center",
    marginTop:29,
    borderColor:'white',
    borderWidth:3,
    borderRadius:100,
    
  },

  image2:{
    height:30,
    width:30,
    marginTop:20,
    marginLeft:15,
  },


  input1: {

    marginTop:70,
    backgroundColor: "white",
    width:300,
    height:55,
    borderRadius:20,
    alignSelf:"center",
    padding:20,
    borderColor:"#848482",
    borderWidth:4,
    
  },

  input2: {

    marginTop:30,
    backgroundColor: "white",
    width:300,
    height:55,
    borderRadius:20,
    alignSelf:"center",
    padding:20,
    borderColor:'#848482',
    borderWidth:4,
  },

  button1:{
    width:250,
    height:50,
    marginTop:50,
    backgroundColor:'#40E0D0',
    borderRadius:500,
    alignSelf:"center",
    borderColor:'#848482',
    borderWidth:3,
   
  },

  buttontext:{
    fontStyle:'italic',
    fontSize:20,
    marginTop:10,
    justifyContent:"center", 
    alignSelf:"center", 
    color:'black'  
  },

  text1:{
    color:'white',
    fontStyle:'italic',
    marginTop:20,
    marginBottom:100,
    alignSelf:"center",
    fontSize:18,
  },
    

});


