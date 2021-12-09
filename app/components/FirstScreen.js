import React from 'react';
import { StyleSheet, View, Image, ImageBackground,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function FirstScreen  ({navigation})  { 
        return (
            <View style={styles.container} >
                <TouchableOpacity  onPress={() => navigation.navigate('SecondScreen')}>
                    <ImageBackground source={require('../assets/imges/Firstpage.png')} onPress={() => navigation.navigate('SecondScreen')}>
                        <Text style={styles.text1}>    "HappyWed"   wedding planner</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    
}
export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    backgrounImge:{
    flex:1,
    justifyContent:'center',
    },

    text1:{
        color:"white",
        fontStyle:"italic",
        fontSize:45,
        alignSelf:'center',
        marginTop:410,
        marginBottom:200,
        
    }
    
});
