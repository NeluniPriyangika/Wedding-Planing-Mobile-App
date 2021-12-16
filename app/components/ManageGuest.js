import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,ImageBackground } from 'react-native';

export default function ManageGuest() {
  return (
    <View style={styles.container}>
     <ImageBackground source={require('../assets/imges/rosepage.png')} style={styles.backgroundImg}>
      <ImageBackground  style= {styles.imge1} source={require('../assets/imges/pexels-jonathan-borba-7945026.jpg')}>
          <Image style={styles.image2} source={require('../assets/imges/white.png')}/>
          <View style={styles.view1}>
            <Text style={styles.textstyle3}>Current Guest Count Is</Text>
          </View>
          <View style={styles.guestView}></View>
          
      </ImageBackground>
      
        <View style={styles.container2}>
          <TouchableOpacity style= {styles.container1} >
              <Image source={require('../assets/imges/plus.png')} style={styles.addbutton}/>     
          </TouchableOpacity>
          
        </View>
        <Text style= {styles.textstyle3}>Add guest group</Text>  

        

        
        
        
     </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },

  container1:{
    
    width:80,
    height:80,
    backgroundColor:'white',
    borderRadius:100,
    marginTop:20,
   
  },


  container2:{
   alignSelf:'center'
  },

   

  

  backgroundImg:{
    flex: 1,
    justifyContent: "center"
  },

  imge1:{
    width:450,
    height:550,
    alignSelf:'center', 
    marginLeft:20,
  },

  image2:{
    height:30,
    width:30,
    marginTop:20,
    marginLeft:30,
  },

  
    

  addbutton:{
    width:70,
    height:70,
    alignSelf:'center',
    borderRadius:100,
    marginTop:5,
    
  },

  textstyle3:{
    fontStyle:'italic',
    color:'white',
    fontSize:30,
    alignSelf:'center',
    marginTop:10,
    marginBottom:25,

  },

  view1:{
    marginTop:30,
    width:350,
    height:70,
    backgroundColor:'black',
    alignSelf:'center',
    borderRadius:20,
  },
  guestView:{
      marginTop:30,
      width:300,
      height:55,
      backgroundColor:"black",
      alignSelf:'center',
      borderRadius:30,
      opacity:0.5,


  },


});

