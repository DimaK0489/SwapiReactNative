import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Films from "../../screens/films";
import People from "../../screens/people";
import { SCREEN, screens } from "../constants/screens";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const GlobalStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home Page"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name={SCREEN.HOME} component={screens[SCREEN.HOME]} />
        <Stack.Screen name={"Films"} component={screens[SCREEN.FILMS]} />
        <Stack.Screen name={"People"} component={screens[SCREEN.PEOPLE]} />
        <Stack.Screen name={SCREEN.FILM_DETAILS} component={screens[SCREEN.FILM_DETAILS]}
                      options={({ navigation }) => ({
                        title: "Details Film",
                        headerRight: () => (
                          <Button title={"People Screen"} onPress={() => navigation.navigate(screens[SCREEN.PEOPLE])} />
                        )
                      })} />
        <Stack.Screen name={SCREEN.PERSON_DETAILS} component={screens[SCREEN.PERSON_DETAILS]}
                      options={({ navigation }) => ({
                        title: "Details Person",
                        headerRight: () => (
                          <Button title={"Films Screen"} onPress={() => navigation.navigate(screens[SCREEN.FILMS])} />
                        )
                      })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GlobalStack;
