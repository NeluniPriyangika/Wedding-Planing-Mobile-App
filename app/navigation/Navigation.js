import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import FirstScreen from '../components/FirstScreen';
import SecondScreen from "../components/SecondScreen";
import ThirdScreen from "../components/ThirdScreen";
import FourthScreen from "../components/FourthScreen";
import LoginPage1 from "../components/LoginPage1";
import RegisterPage from "../components/RegisterPage";
import Vendors from "../components/Vendors";
import MenuScreen from "../components/MenuScreen";
import Photographers from "../components/Photographers";
import FashionDesingners from "../components/FashionDesigners";
import AddTask from "../components/AddTask";
import ManageBudget from "../components/ManageBdget";
import ManageGuest from "../components/ManageGuest";
import TaskPage from "../components/TaskPage";
import WeddingDecorations from "../components/WeddingDecorations";
import Hotels from "../components/Hotels";
import CateringServicers from "../components/CateringServicers";
import Profile from "../components/Profile";
import FirebaseEx from "../components/FirebaseEx";






const Stack = createStackNavigator();

function App() {
  

    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={{}} initialRouteName="FirebaseEx">
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
          <Stack.Screen name="ThirdScreen" component={ThirdScreen}  />
          <Stack.Screen name="FourthScreen" component={FourthScreen} />
          <Stack.Screen name="LoginPage1" component={LoginPage1} />
          <Stack.Screen name="RegisterPage" component={RegisterPage}/>
          <Stack.Screen name="MenuScreen" component={MenuScreen} />
          <Stack.Screen name="Vendors" component={Vendors} />
          <Stack.Screen name="Photographers" component={Photographers} />
          <Stack.Screen name="FashionDesigners" component={FashionDesingners} />
          <Stack.Screen name="AddTask" component={AddTask} />
          <Stack.Screen name="ManageBudget" component={ManageBudget} />
          <Stack.Screen name="ManageGuest" component={ManageGuest} />
          <Stack.Screen name="TaskPage" component={TaskPage} />
          <Stack.Screen name="WeddingDecorations" component={WeddingDecorations} />
          <Stack.Screen name="Hotels" component={Hotels} />
          <Stack.Screen name="CateringServicers" component={CateringServicers} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="FirebaseEx" component={FirebaseEx} />
          
          

          
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;