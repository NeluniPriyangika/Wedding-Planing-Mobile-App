import * as React from 'react';
import { Text, View, StyleSheet, Image,ImageBackground, ScrollView } from 'react-native';

function Photographers () {
  return (
      
    <ScrollView>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/imges/rosepage.png')} style={styles.backgroundImg}>
            <View style= {styles.container0}>
                <Image style={styles.image1} source={require('../assets/imges/white.png')}/>
                <Text style={styles.textstyle1}>Photographers</Text>
                </View>
            <View style={styles.container1}>
                <View style= {styles.container0} >
                <Image style={styles.container2} source={require('../assets/imges/pexels-melike-benli-10438478.jpg')}/>
                <View style={styles.container3}>
                    <Text style={styles.textstyle2}>Info :- Banchi photography,    
                                                            Nugegoda,
                                                            Colombo .</Text>
                    <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                    <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                </View>
                </View>
            </View>

            <View style={styles.container1}>
                <View style= {styles.container0} >
                <Image style={styles.container2} source={require('../assets/imges/pexels-nataliya-vaitkevich-4942876.jpg')}/>
                <View style={styles.container3}>
                    <Text style={styles.textstyle2}>Info :- Banchi photography,    
                                                            Nugegoda,
                                                            Colombo .</Text>
                    <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                    <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                </View>
                </View>
            </View>

            <View style={styles.container1}>
                <View style= {styles.container0} >
                <Image style={styles.container2} source={require('../assets/imges/Browsholme-Hall-Wedding-Photographs-029.jpg')}/>
                <View style={styles.container3}>
                    <Text style={styles.textstyle2}>Info :- Banchi photography,    
                                                            Nugegoda,
                                                            Colombo .</Text>
                    <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                    <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                </View>
                </View>
            </View>

            <View style={styles.container1}>
                <View style= {styles.container0} >
                <Image style={styles.container2} source={require('../assets/imges/pexels-soheil-kmp-10433110.jpg')}/>
                <View style={styles.container3}>
                    <Text style={styles.textstyle2}>Info :- Banchi photography,    
                                                            Nugegoda,
                                                            Colombo .</Text>
                    <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                    <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                </View>
                </View> 
            </View>

            <View style={styles.container1}>
                <View style= {styles.container0} >
                <Image style={styles.container2} source={require('../assets/imges/wedding-photography.jpg')}/>
                <View style={styles.container3}>
                    <Text style={styles.textstyle2}>Info :- Banchi photography,    
                                                            Nugegoda,
                                                            Colombo .</Text>
                    <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                    <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                </View>
                </View>
            </View>

            <View style={styles.container1}>
                <View style= {styles.container0} >
                <Image style={styles.container2} source={require('../assets/imges/Wedding-Photography-as-a-Career-and-its-Inside-World.jpg')}/>
                <View style={styles.container3}>
                    <Text style={styles.textstyle2}>Info :- Banchi photography,    
                                                            Nugegoda,
                                                            Colombo .</Text>
                    <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                    <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                </View>
                </View>
            </View>
            
            <View style={styles.container1}>
                <View style= {styles.container0} >
                <Image style={styles.container2} source={require('../assets/imges/pexels-cleyder-duque-7405169.jpg')}/>
                <View style={styles.container3}>
                    <Text style={styles.textstyle2}>Info :- Banchi photography,    
                                                            Nugegoda,
                                                            Colombo .</Text>
                    <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                    <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                </View>
                </View>
            </View>
            </ImageBackground>
            
        
        </View>
    </ScrollView>
  );
}
export default Photographers;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  container0:{
    flexDirection:'row',
    
  },
  container1:{
    width:365,
    height:200,
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:15,
  },
   backgroundImg:{
    flex: 1,
    justifyContent: "center"
  },
  image1:{
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
    marginLeft:50,
  
  },
  container2:{
    width:170,
    height:190,
    marginTop:5,
    marginLeft:5,
  },
  
  container3:{
    width:145,
    height:140,
    marginTop:5,
    marginLeft:5,
    backgroundColor:'White'
  },
  textstyle2:{
    fontStyle:'italic',
    fontSize:16,
    marginLeft:10,
    marginTop:5,
    color:"black",
  },

  
});