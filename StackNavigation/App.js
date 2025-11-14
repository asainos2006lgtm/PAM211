import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler'

import home from "./Screens/home";
import profile from "./Screens/profile";
import settings from "./Screens/settings";

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={home}></Stack.Screen>
        <Stack.Screen name="Profile" component={profile}></Stack.Screen>
        <Stack.Screen name="Settings" component={settings}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
