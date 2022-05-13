import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import TodoList from "../screens/TodoList";
import Links from "../screens/Links";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Liste de tâches" component={TodoList} />
      <Stack.Screen name="Liens" component={Links} />
      <Stack.Screen name="Profil" component={Profile} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
