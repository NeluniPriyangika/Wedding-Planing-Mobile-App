import  React,{ useState} from 'react';
import { Text, View, StyleSheet, Image,ImageBackground, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function TaskPage() {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  return (
  
    <View style={styles.container}>
      <ImageBackground source={require('../assets/imges/rosepage.png')} style={styles.backgroundImg}>

        <View style= {styles.container0}>
          <Image style={styles.image2} source={require('../assets/imges/white.png')}/>
          <Text style={styles.textstyle1}>Checklist</Text>
        </View>
        <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Added guest list</Text>
        </View>
        <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected1}
              onValueChange={setSelection1}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Added guest list</Text>
        </View>
        <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected2}
              onValueChange={setSelection2}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Added guest list</Text>
        </View>
        <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected3}
              onValueChange={setSelection3}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Added guest list</Text>
        </View>
        <TouchableOpacity style= {styles.container1} >
            <Image source={require('../assets/imges/plus.png')} style={styles.addimge}/>
          
          
        </TouchableOpacity>
        
         
          
          
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
    
    width:100,
    height:100,
    backgroundColor:'white',
    borderRadius:100,
    marginTop:70,
    alignSelf:'center'
  },

  addimge:{
    width:80,
    height:80,
    alignSelf:'center',
    borderRadius:100,
    marginTop:10,
    
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
    marginTop:20,
    marginLeft:47,
  
  },

  checkboxContainer: {
    flexDirection:'row',
    marginTop: 30,
    backgroundColor:'white',
    width:300,
    height:50,
    alignSelf:'center',
    borderRadius:10,
  },
  checkbox: {
    marginLeft:30,
    marginTop:10,
    
    
    
  },
  label: {
    marginLeft:20,
    fontStyle:'italic',
    color:'black',
    fontSize:25,
    marginTop:10,
   
  },
});