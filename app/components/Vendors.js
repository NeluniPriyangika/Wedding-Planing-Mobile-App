import * as React from 'react';
import { Text, View, StyleSheet, Image,ImageBackground } from 'react-native';

function Vendors() {
  return (
  
    <View style={styles.container}>
      <ImageBackground source={require('../assets/imges/rosepage.png')} style={styles.backgroundImg}>

        <View style= {styles.container0}>
          <Image style={styles.image2} source={require('../assets/imges/white.png')}/>
          <Text style={styles.textstyle1}>Find Vendors</Text>
        </View>

        <View style={styles.container1}>
          <View style={styles.container2} >
            <Image style={styles.image1} source={require('../assets/imges/pexels-flo-dahm-1178337.jpg')}/>
            <Text style={styles.text1}>Find Photographers</Text>
          </View>
          <View style={styles.container2} >
            <Image style={styles.image3} source={require('../assets/imges/pexels-marina-abrosimova-10193997.jpg')}/>
            <Text style={styles.text1}>Find Fashion Designers           and Salons</Text>
          </View>
          <View style={styles.container2} >
            <Image style={styles.image3} source={require('../assets/imges/pexels-amar-saleem-70441.jpg')}/>
            <Text style={styles.text1}>Find Hotels</Text>
          </View>
          <View style={styles.container2} >
            <Image style={styles.image3} source={require('../assets/imges/flower.jpg')}/>
            <Text style={styles.text1}>Find Flowers and          Decorations Suppliers</Text>
          </View>
          <View style={styles.container2} >
            <Image style={styles.image3} source={require('../assets/imges/pexels-fu-zhichao-587741.jpg')}/>
            <Text style={styles.text1}>Find Catering Servicers</Text>
          </View>
        </View>
        
        
      </ImageBackground>
    </View>
  );
}
export default Vendors; 

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },

  container0:{
    flexDirection:'row',
    
  },

  container1:{
    backgroundColor:'white',
    width:375,
    height:640,
    alignSelf:'center',
    marginTop:10,
    borderRadius:30,

  },

  container2:{
    flexDirection:'row'
  },

  container3:{
    width:80,
    height:100,
    backgroundColor:"black",
    marginTop:15,
    marginLeft:20,
    borderRadius:100,
  },

  backgroundImg:{
    flex: 1,
    justifyContent: "center"
  },

  image2:{
    height:30,
    width:30,
    marginTop:15,
    marginLeft:15,
  },

  textstyle1:{
    color:'white',
    fontStyle:'italic',
    fontSize:30,
    marginTop:15,
    marginLeft:78,

  
  },

  image1:{
    
    width:90,
    height:110,
    backgroundColor:"black",
    marginTop:20,
    marginLeft:15,
    borderRadius:100,
  },
  image3:{
    width:90,
    height:110,
    marginTop:15,
    marginLeft:15,
    borderRadius:100,

  },
  text1:{
    color:'gray',
    fontStyle:'italic',
    alignSelf:'center',
    marginLeft:10,
    fontSize:25,
    marginRight:5,
  }
  
});
  