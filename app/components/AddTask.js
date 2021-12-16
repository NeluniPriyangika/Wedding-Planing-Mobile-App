import  React,{ useState} from 'react';
import { Text, View, StyleSheet, Image,ImageBackground,TextInput, TouchableOpacity} from 'react-native';

export default function AddTasks() {
  
  return (
  
    <View style={styles.container}>
      <ImageBackground source={require('../assets/imges/rosepage.png')} style={styles.backgroundImg}>

        <View style= {styles.container0}>
          <Image style={styles.image2} source={require('../assets/imges/white.png')}/>
          <Text style={styles.textstyle1}>Add Tasks</Text>
        </View>

        <TextInput style={styles.input1} 
                placeholder="Add task name"
              />
              <TextInput style={styles.input2} 
                placeholder="Add date"
              />
        <View>
          <TouchableOpacity style= {styles.container1} >
              <Image source={require('../assets/imges/plus.png')} style={styles.addimge}/> 
          </TouchableOpacity>
          
          <Image style= {styles.imge3} source={require('../assets/imges/Wedding-Photography(1).jpg')}/>
        </View>
        
         
          
          
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },

  container0:{
    flexDirection:'row',
    
  },

  container1:{
    
    width:60,
    height:60,
    backgroundColor:'white',
    borderRadius:100,
    marginTop:10,
    marginBottom : 10,
    alignSelf:'center',
  },

  imge3:{
    
    width:400,
    height:500,
    alignSelf:'center',
  },

  addimge:{
    width:50,
    height:50,
    alignSelf:'center',
    borderRadius:100,
    marginTop:5,
    
  },

  backgroundImg:{
    flex: 1,
    
  },

  image2:{
    height:30,
    width:30,
    marginTop:20,
    marginLeft:15,
  },

  textstyle1:{
    color:'white',
    fontStyle:'italic',
    fontSize:30,
    marginTop:15,
    marginLeft:78,

  
  },
  input1: {

    marginTop:30,
    backgroundColor: "white",
    width:350,
    height:60,
    borderRadius:20,
    alignSelf:'center',
    padding:20,
    borderColor:'#848482',
    borderWidth:3,
    
  },

  input2: {

    marginTop:10,
    backgroundColor: "white",
    width:350,
    height:60,
    borderRadius:20,
    alignSelf:'center',
    padding:20,
    borderColor:'#848482',
    borderWidth:3,
  },

 
});