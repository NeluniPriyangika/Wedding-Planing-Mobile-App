import * as React from 'react';
import { Text, View, StyleSheet, Image,ImageBackground, ScrollView } from 'react-native';

function FashionDesingners () {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/imges/rosepage.png')} style={styles.backgroundImg}>
                <View style= {styles.container0}>
                    <Image style={styles.image1} source={require('../assets/imges/white.png')}/>
                    <Text style={styles.textstyle1}>Fashion Designers</Text>
                    </View>
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/Image-411.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Amaya salon,
                                                            Nugegoda,
                                                            Colombo .       </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
            
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/a72c5d18729e3a54fe79145171757110.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Vinu Disanayake,
                                                            Nugegoda,
                                                            Colombo .       </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
            
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/pexels-marina-abrosimova-10193997.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Amaya salon,
                                                            Nugegoda,
                                                            Colombo .       </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
            
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/01-ritika-hairstylist-819x1024.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Amaya salon,
                                                            Nugegoda,
                                                            Colombo .        </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
            
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/09f0c85c544f13f166598cb188979e95--bridesmaid-colours-bridesmaid-saree.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Amaya salon,
                                                            Nugegoda,
                                                            Colombo .       </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
            
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/8a1ea92a4ecdef9c268556552bd9db3d.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Amaya salon,
                                                            Nugegoda,
                                                            Colombo .       </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
                
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/71c2dcd3522441392f6f54ac778db781.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Amaya salon,
                                                            Nugegoda,
                                                            Colombo .       </Text>
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
export default FashionDesingners;

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