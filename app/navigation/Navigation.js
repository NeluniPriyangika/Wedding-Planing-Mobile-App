import React, { useContext, useState, useEffect} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import {AuthContext} from "./AuthProvider";
import FirstScreen from '../components/FirstScreen';
import SecondScreen from "../components/SecondScreen";
import ThirdScreen from "../components/ThirdScreen";
import FourthScreen from "../components/FourthScreen";
import LoginPage1 from "../components/LoginPage1";
import RegisterPage from "../components/RegisterPage";
import Vendors from "../components/Vendors";
import MenuScreen from "../components/MenuScreen";
import { useState } from "react";

const Stack = createStackNavigator();

function App() {
  const {user,setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) =>{
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect (() =>{
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe o unmount

  }, []);

  if  (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={{}} initialRouteName="RegisterPage">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen}  />
        <Stack.Screen name="FourthScreen" component={FourthScreen} />
        <Stack.Screen name="LoginPage1" component={LoginPage1} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="Vendors" component={Vendors} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;