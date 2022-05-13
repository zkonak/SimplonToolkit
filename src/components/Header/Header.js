import * as React from "react";
import { Appbar, Avatar, Button } from "react-native-paper";

const Header = (props) => {
  console.log(`!!Header (avatar) props:`, props);
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: "#fff",
        },
      }}
    >
      <Appbar.Content title={props.HeaderName} color="#000" />

      <Button
        onPress={() => {
          navigate("Settings"); // use navigator to trigger stack navigation
        }}
      >
        <Avatar.Icon
          size={48}
          icon="face-man-profile"
          theme={{
            colors: {
              primary: "#fff",
            },
          }}
        />
      </Button>
    </Appbar.Header>
  );
};

export default Header;
