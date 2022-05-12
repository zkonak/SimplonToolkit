import * as React from "react";
import { Appbar, Avatar } from "react-native-paper";
import { Text } from "react-native";

const Header = (props) => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: "#fff",
        },
      }}
    >
      <Appbar.Content title={props.HeaderName} color="#000" />
      <Avatar.Icon
        size={48}
        icon="face-man-profile"
        theme={{
          colors: {
            primary: "#fff",
          },
        }}
      />
    </Appbar.Header>
  );
};

export default Header;
