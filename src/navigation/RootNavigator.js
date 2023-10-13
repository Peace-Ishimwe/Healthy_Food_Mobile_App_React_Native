import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import OnBoarding from "../screens/onBoarding";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator