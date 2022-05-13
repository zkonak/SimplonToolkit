import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Connexion" component={Login} />
      <Stack.Screen name="Inscription" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
