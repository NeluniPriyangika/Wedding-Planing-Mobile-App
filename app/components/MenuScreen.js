import React from 'react';
import { StyleSheet, Alert, View, Image, TouchableOpacity,Text,TextInput,ImageBackground } from 'react-native';
import CountDown from 'react-native-countdown-component';

function MenuScreen () {
        return (
          <View style={styles.container} >
            <ImageBackground source={require('../assets/imges/rosepage.png')} style={styles.backgroundImg} >
              <View style= {styles.container0}>
                <Image style={styles.image2} source={require('../assets/imges/white.png')}/>
                <Text style={styles.textstyle1}>For your wedding</Text>
              </View>
              
              <View style={styles.container1}>
                <CountDown style={styles.countDownstyle}
                    until={10000000}
                    onFinish={() => alert('finished')}
                    onPress={() => alert('hello')}
                    size={20}
                />
              </View>
              <Text style={styles.viewweddingdate}>Your wedding date</Text>
              <View style={styles.container3}></View>
              <View style={styles.container2}>
                <Image source={require('../assets/imges/ring.png')}  style={styles.img1}/>
                <TouchableOpacity style={styles.menubuttons}>
                  <Text style={styles.menuButonText}>Find Vendors</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menubuttons1}>
                  <Text style={styles.menuButonText}>Manage Task</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menubuttons1}>
                  <Text style={styles.menuButonText}>Manage Budget</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menubuttons1}>
                  <Text style={styles.menuButonText}>Manage Guests</Text>
                </TouchableOpacity>
                
              </View>
              
            </ImageBackground>
          </View>
        );
}

export default MenuScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },

  container0:{
    flexDirection:'row',
    
  },

  textstyle1:{
    color:"white",
    fontStyle:"italic",
    fontSize:25,
    marginLeft:63,
    alignSelf:"center"
  
  },
  container1:{
    backgroundColor:"white",
    width:250,
    alignSelf:"center",
    borderRadius:30,
    marginTop:10,
    opacity:0.7,
  },

  container2:{
    backgroundColor:"white",
    marginTop:20,
    width:330,
    height:470,
    alignSelf:"center",
    borderRadius:250,
    
    
    
  },

  container3:{
    backgroundColor:"white",
    width:150,
    height:25,
    alignSelf:"center",
    marginTop:5,
  },

  backgroundImg:{
    flex: 1,
    justifyContent: "center",

  },
  countDownstyle:{
    alignSelf:"center",
    

  },
  img1:{
    alignSelf:"center",
    width:200,
    height:150,
  
  },

  image2:{
    height:30,
    width:30,
    marginTop:10,
    marginLeft:15,
  },

  menubuttons:{
    width:250,
    height:50,
    backgroundColor:"black",
    alignSelf:"center",
    borderRadius:30,
    borderColor:"#808080",
    borderWidth:3,


  },

  menubuttons1:{
    width:250,
    height:50,
    backgroundColor:"black",
    alignSelf:"center",
    borderRadius:30,
    borderColor:"#808080",
    borderWidth:3,
    marginTop:10,

  },

  menuButonText:{
    alignSelf:"center",
    marginTop:9,
    color:"white",
    fontSize:20,
    fontStyle:"italic"
    
  },
  viewweddingdate:{
    color:"white",
    fontStyle:"italic",
    alignSelf:"center",
    marginTop:5,
    fontSize:20,
  }


});