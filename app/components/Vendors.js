import * as React from 'react';
import { Text, View, StyleSheet, Image,ImageBackground } from 'react-native';

function Vendors() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/imges/rosepage.png')} style={styles.ImageBackground}>
          <Text style={styles.text1}>Vendors</Text>
      </ImageBackground>
    </View>
  );
}
export default Vendors;

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },

  backgrounImge:{
      flex:1,
      justifyContent:'center',

  },

  text1:{
      fontSize:30,
      fontStyle:'italic',
      color:'white',
      alignSelf:'center',
  },

  
});