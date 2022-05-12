import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import Home from "./src/screens/Home";
import TodoList from "./src/screens/TodoList";
import Links from "./src/screens/Links";
import Icon from "react-native-vector-icons/FontAwesome";

const Bottom = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Bottom.Navigator
          initialRouteName="Home"
          activeColor="#ffffff"
          inactiveColor="#000000"
          barStyle={{ backgroundColor: "#ED1651" }}
        >
          <Bottom.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerRight: () => (
                <Icon
                  name="home"
                  type="feather"
                  color="#fff"
                  onPress={() => navigation.navigate("TodoList")}
                />
              ),
            })}
          />
          <Bottom.Screen name="TodoList" component={TodoList} />
          <Bottom.Screen name="Links" component={Links} />
        </Bottom.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
