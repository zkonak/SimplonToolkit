import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import STYLE from "./src/theme";
import Home from "./src/screens/Home";
import TodoList from "./src/screens/TodoList";
import Links from "./src/screens/Links";
import Header from "./src/components/Header/Header";

const HomeRoute = () => <Home />;
const TodoRoute = () => <TodoList />;
const LinkRoute = () => <Links />;

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      icon: "home",
    },
    { key: "todoList", title: "TodoList", icon: "check" },
    { key: "links", title: "Links", icon: "link" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    todoList: TodoRoute,
    links: LinkRoute,
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header HeaderName={routes[index].title} />
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={{ backgroundColor: STYLE.MAINCOLOR }}
        />
      </NavigationContainer>
    </Provider>
  );
}
