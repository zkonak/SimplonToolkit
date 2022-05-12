import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";

import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import client from "./client";

function Test({ navigation }) {
  const registerDevice = (pushToken) =>
    client.post("/expoPushTokens", { token: pushToken });

  // register the client with the server to get push notifications
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
    } catch (error) {
      console.log("Error getting a token", error);
    }
    // trigger registerForPushNotifications on app launch
    useEffect(() => {
      registerForPushNotifications();
    }, []);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Title title="Test page" />
        <Card.Content>
          <TextInput mode="outlined" label="Name" />
          <Button mode="contained" onPress={triggerNotification}>
            Button
          </Button>
        </Card.Content>
      </Card>
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
});

export default Test;
