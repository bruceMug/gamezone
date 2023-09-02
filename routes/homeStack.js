import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import * as React from 'react';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";


const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: '' }} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ headerTitle: '' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
