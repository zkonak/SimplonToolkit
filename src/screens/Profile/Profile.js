import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Card, TextInput, List, Item, Icon } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setSignOut } from "../../store/authSlice";

function Profile({ navigation }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setSignOut());
  };
  return (
    <ScrollView style={styles.scrollView}>
      <List.Item
        title="Compte"
        style={styles.listItem}
        //left={() => <List.Icon icon="" />}
      />

      <List.Item title="Notifications" style={styles.listItem} />
      <List.Item
        title="Se déconnecter"
        style={styles.listItem}
        onPress={handleLogout}
        // style={{ backgroundColor: "#fc574e" }}
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
