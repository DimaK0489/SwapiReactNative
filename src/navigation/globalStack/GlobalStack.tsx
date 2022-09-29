import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Films from "../../screens/films";
import People from "../../screens/people";
import { SCREEN, screens } from "../constants/screens";

const Stack = createNativeStackNavigator();

const GlobalStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home Page"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name={SCREEN.HOME} component={screens[SCREEN.HOME]} />
        <Stack.Screen name={"Films"} component={screens[SCREEN.FILMS]}/>
        <Stack.Screen name={"People"} component={screens[SCREEN.PEOPLE]} />
        <Stack.Screen name={SCREEN.FILM_DETAILS} component={screens[SCREEN.FILM_DETAILS]} />
        <Stack.Screen name={SCREEN.PERSON_DETAILS} component={screens[SCREEN.PERSON_DETAILS]} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GlobalStack;
