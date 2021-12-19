import * as React from 'react';
import { Text, View, StyleSheet, Image,ImageBackground, ScrollView } from 'react-native';

function CateringServicers () {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/imges/rosepage.png')} style={styles.backgroundImg}>
                <View style= {styles.container0}>
                    <Image style={styles.image1} source={require('../assets/imges/white.png')}/>
                    <Text style={styles.textstyle1}>Catering Servicers</Text>
                    </View>
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/pexels-talena-reese-9936058.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Lassana WeddingDecorations,
                                                              Piliyandala;
                                                              Colombo .       </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
            
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/pexels-jai-kumar-5186877.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info:Leo Catering Service,
                                                             Piliyandala,
                                                             Colombo .       </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
            
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/pexels-jonathan-borba-5610386.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Lassana WeddingDecorations,
                                                              Piliyandala;
                                                              Colombo .       </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
            
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/pexels-jonathan-borba-9816191.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info:Leo Catering Service,
                                                             Piliyandala,
                                                             Colombo .        </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
            
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/pexels-lukas-306046.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Lassana WeddingDecorations,
                                                              Piliyandala;
                                                              Colombo .        </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
            
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/pexels-israel-frança-2264036.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info:Leo Catering Service,
                                                             Piliyandala,
                                                             Colombo .       </Text>
                        <Text style={styles.textstyle2}>Minimum cost :- RS 20000</Text>
                        <Text style={styles.textstyle2}>Contact us :-0776985441</Text>
                    </View>
                    </View>
                </View>
                
                <View style={styles.container1}>
                    <View style= {styles.container0} >
                    <Image style={styles.container2} source={require('../assets/imges/pexels-fu-zhichao-587741.jpg')}/>
                    <View style={styles.container3}>
                        <Text style={styles.textstyle2}>Info: Lassana WeddingDecorations,
                                                              Piliyandala;
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
export default CateringServicers;

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