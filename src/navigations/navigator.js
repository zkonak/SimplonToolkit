import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app-navigator";
import AuthNavigator from "./auth-navigator";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../store/authSlice";

import { BottomNavigation } from "react-native-paper";

import { Provider } from "react-redux";
import { store } from "../store/store";
import STYLE from "../theme";
import Home from "../screens/Home";
import TodoList from "../screens/TodoList";
import Links from "../screens/Links";
import Header from "../components/Header/Header";
import Profile from "../screens/Profile/Profile";
const HomeRoute = () => <Home />;
const TodoRoute = () => <TodoList />;
const LinkRoute = () => <Links />;
const ProfileRoute = () => <Profile />;

const AppRoute = () => {
  //React.useState(false);  for change state true:connecté, false : non
  //const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true; // TODO: use ^ for demo
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      icon: "home",
    },
    { key: "todoList", title: "TodoList", icon: "check" },
    { key: "links", title: "Links", icon: "link" },
    { key: "profile", title: "Profil", icon: "face-man-profile" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    todoList: TodoRoute,
    links: LinkRoute,
    profile: ProfileRoute,
  });
  return (
    <NavigationContainer>
      {/* Conditional stack navigator rendering based on login state */}

      {isLoggedIn ? (
        <>
          <Header HeaderName={routes[index].title} />
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{ backgroundColor: STYLE.MAINCOLOR }}
          />
        </>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppRoute;
