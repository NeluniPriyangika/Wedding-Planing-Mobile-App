import React from 'react';
import {View,Image, StyleSheet,Text, TouchableOpacity} from 'react-native'; 

function SecondScreen ({navigation}) {

        
        return (
            <View style={styles.container}>
              <Image source={require('../assets/imges/4180449.png')} style={styles.image1} />
              
                <Text style={styles.textstyle1}>HappyWed is an all-in-one wedding planing app
                </Text>
                <View style={styles.container0}>
                  <View style= {styles.container1}></View>
                  <View style= {styles.container2}></View>
                  <View style= {styles.container2}></View>
                </View>

                <TouchableOpacity 
                  onPress={() => navigation.navigate('LoginPage1')} 
                  style={styles.button1}>
                  <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate('RegisterPage')}
                  style={styles.button2}>
                  <Text style={styles.buttontext}>Register</Text>  
                </TouchableOpacity>

                
                
                
                

            </View>
        );
}
export default SecondScreen;


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#6E0606",
  },

  container0:{
    flexDirection:'row',
    justifyContent:'center',

  },

  container1:{
    width:10,
    height:10,
    backgroundColor:'white',
    justifyContent:'center',
    borderRadius:10,
    
  },

  container2:{
    width:10,
    height:10,
    
    marginBottom:20,
    marginLeft:20,
    backgroundColor:'white',
    justifyContent:'center',
    borderRadius:10,
  },

  image1:{
    width:370,
    height:400,
    marginTop:20,
    alignSelf:'center',
    borderRadius:20,
  },

  textstyle1:{
    color:'white',
    fontStyle:'italic',
    marginTop:20,
    marginBottom:32,
    alignSelf:'center',
    fontSize:23,
  }, 

  button1:{
    width:250,
    height:50,
    marginBottom:10,
    backgroundColor:'white',
    borderRadius:30,
    alignSelf:'center',
   
  },

  buttontext:{
    color:'black',
    fontStyle:'italic',
    fontSize:25,
    marginTop:10,
    justifyContent:'center', 
    alignItems:'center',
    alignSelf:'center',
   

  },

  button2:{
    width:250,
    height:50,
    
    marginBottom:5,
    backgroundColor:'white',
    borderRadius:30,
    alignSelf:'center',

  },

  

});