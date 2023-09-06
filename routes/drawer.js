import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer } from "react-navigation";

import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const RootDrawer = createDrawerNavigator();

export default function Drawer() {
    return (
        <RootDrawer.Navigator>
            <RootDrawer.Screen name="Home" component={HomeStack} />
            <RootDrawer.Screen name="About" component={AboutStack} />
        </RootDrawer.Navigator>
    )
}
