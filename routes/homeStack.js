import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

const defaultNavigationOptions = {
  headerTintColor: '#444',
  headerStyle: { backgroundColor: '#87ceeb', height: 70 },
};

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigationOptions}>

        <Stack.Screen
          name="Home" 
          component={Home}
          options={{
            headerTitle: "GameZone",
            // headerStyle: { backgroundColor: "#333" },
          }}
        />

        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            headerTitle: "Review Details",
            // headerStyle: { backgroundColor: "#87ceeb" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
