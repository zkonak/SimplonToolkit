import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  TextInput,
  List,
  Item,
  Icon,
  Text,
  Avatar,
} from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setSignOut } from "../../store/authSlice";

function Profile({ navigation }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setSignOut());
  };

  const user = { firstName: "John", email: "johndoe@gmail.com" };

  return (
    <ScrollView style={styles.scrollView}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Avatar.Image
          size={128}
          style={{ backgroundColor: "white" }}
          source={require("../../../assets/icon.png")}
        />
        <Text style={{ fontSize: 20, marginTop: 10 }}>
          Bonjour {user.firstName} !
        </Text>
      </View>
      <List.Item title="Compte" style={styles.listItem} />

      <List.Item title="Notifications" style={styles.listItem} />
      <List.Item
        title="Se déconnecter"
        style={styles.listItem}
        onPress={handleLogout}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10,
  },
  card: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textInput: {
    marginBottom: 10,
  },
  listItem: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 20,
  },
});

export default Profile;
