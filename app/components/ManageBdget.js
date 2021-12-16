import * as React from 'react';
import { Text, View, StyleSheet, Image,ImageBackground,TouchableOpacity } from 'react-native';

export default function ManageBudget() {
  return (
    <View style={styles.container}>
     <ImageBackground source={require('../assets/imges/rosepage.png')} style={styles.backgroundImg}>
      <ImageBackground  style= {styles.imge1} source={require('../assets/imges/pexels-matthew-5607654.jpg')}>
          <Image style={styles.image2} source={require('../assets/imges/white.png')}/>
          <View style={styles.View1}>
            <Text style={styles.textstyle3}>Your Budget Is</Text>
          </View>
          <View style={styles.budgetView}></View>
          <View style={styles.View2}>
            <Text style={styles.textstyle4}>Current Budget Is</Text>
          </View >
          <View style={styles.budgetView}></View>
      </ImageBackground>
      

      <TouchableOpacity style= {styles.container1} >
              <Image source={require('../assets/imges/plus.png')} style={styles.addbutton}/>
            
            
      </TouchableOpacity>
          
      
        
      <Text style={styles.textstyle1}>Add Expense</Text>
          
        
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
    marginTop:30,
    alignSelf:'center'
  },

  

  backgroundImg:{
    flex: 1,
    justifyContent: "center"
  },

  imge1:{
    width:400,
    height:550,
    alignSelf:'center', 
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

  

  

  textstyle1:{
    
    fontStyle:'italic',
    color:'white',
    alignSelf:'center',
    marginTop:20,
    marginBottom:30,
    fontSize:20,
  },

  
  textstyle3:{
    fontStyle:'italic',
    color:'white',
    fontSize:30,
    alignSelf:'center',

  },

  budgetView:{
    marginTop:10,
    width:330,
    height:50,
    backgroundColor:'white',
    alignSelf:'center',
    borderRadius:20,
    opacity:0.5,
  },
View1:{
    marginTop:10,
    width:250,
    height:40,
    backgroundColor:'black',
    alignSelf:'center',
    borderRadius:20,
    
},

View2:{
    marginTop:80,
    width:250,
    height:40,
    backgroundColor:'black',
    alignSelf:'center',
    borderRadius:20,
    
},

  textstyle4:{
    fontStyle:'italic',
    color:'white',
    fontSize:30,
    alignSelf:'center',
    

  },
});
