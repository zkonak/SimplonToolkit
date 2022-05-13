import * as React from "react";
import { Appbar, Avatar, Button } from "react-native-paper";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import STYLE from "../../theme";
// import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

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

      <Button style={{ size: 100 }} color={STYLE.MAINCOLOR}>
        <View style={{ flexDirection: "row" }}>
          <Avatar.Icon
            size={38}
            icon="bell"
            theme={{
              colors: {
                primary: "white",
              },
            }}
            color={`${STYLE.MAINCOLOR}`}
          />

          <Text style={{ color: `${STYLE.MAINCOLOR}`, align: "center" }}>
            5
          </Text>
        </View>
      </Button>
    </Appbar.Header>
  );
};

export default Header;
const styles = StyleSheet.create({
  button: {
    size: 100,
  },
});
