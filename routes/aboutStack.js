import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";

const Stack = createStackNavigator();

const defaultNavigationOptions = {
  headerTintColor: '#444',
  headerStyle: { backgroundColor: '#87ceeb', height: 70 },
};

export default function AboutStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigationOptions}>

        <Stack.Screen
          name="About" 
          component={About}
          options={{
            headerTitle: "About GameZone",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

