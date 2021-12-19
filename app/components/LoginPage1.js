import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Image,Text,TextInput, TouchableOpacity,ScrollView} from 'react-native';
import { AuthContext } from './AuthProvider';


function LoginPage1({navigation}){
  
  
   
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
                placeholder="Password"
                secureTextEntry ={true} 
              />

              <TouchableOpacity style={styles.button1}
                  onPress={() => navigation.navigate('MenuScreen')}>
                  <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity> 
              <Text style={styles.text1}>Forgod Password ?</Text>
            </View>
          </ScrollView>

        );
}

export default LoginPage1;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#6E0606',
  },

   container0:{
    flexDirection:'row',
  
  },
  
  image1:{
    height:200,
    width:200,
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

    marginTop:60,
    backgroundColor: "white",
    width:330,
    height:60,
    borderRadius:20,
    alignSelf:"center",
    padding:20,
    borderColor:"#848482",
    borderWidth:4,
    
  },

  input2: {

    marginTop:30,
    backgroundColor: "white",
    width:330,
    height:60,
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
    backgroundColor:'#556080',
    borderRadius:500,
    alignSelf:"center",
    borderColor:'#FFFFFF',
    borderWidth:4,
   
  },

  buttontext:{
    fontStyle:'italic',
    fontSize:25,
    marginTop:5,
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


