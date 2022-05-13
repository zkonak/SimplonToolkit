import React, { useState, useEffect } from "react";
import { StyleSheet, Platform } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/toDoSlice";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import STYLE from "../../theme";
import { Button, Card, TextInput, Text } from "react-native-paper";

// Show notifications when the app is in the foreground
// Notifications.setNotificationHandler({
//   handleNotification: async () => {
//     return {
//       shouldShowAlert: true,
//     };
//   },
// });

export const AddTodo = () => {
  // useEffect(() => {
  //   // Permission for iOS
  //   if (Platform.OS === "ios") {
  //     Permissions.getAsync(Permissions.NOTIFICATIONS)
  //       .then((statusObj) => {
  //         // Check if we already have permission
  //         if (statusObj.status !== "granted") {
  //           // If permission is not there, ask for the same
  //           return Permissions.askAsync(Permissions.NOTIFICATIONS);
  //         }
  //         return statusObj;
  //       })
  //       .then((statusObj) => {
  //         // If permission is still not given throw error
  //         if (statusObj.status !== "granted") {
  //           throw new Error("Permission not granted");
  //         }
  //       })
  //       .then(() => {
  //         return Notifications.getExpoPushTokenAsync();
  //       })
  //       .then((response) => {
  //         const deviceToken = response.data;
  //         console.log("toooken");
  //         console.log({ deviceToken });
  //       })
  //       .catch((err) => {
  //         return null;
  //       });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (Platform.OS === "ios") {
  //     const receivedSubscription =
  //       Notifications.addNotificationReceivedListener((notification) => {
  //         console.log("Notification Received!");
  //         console.log(notification);
  //       });

  //     const responseSubscription =
  //       Notifications.addNotificationResponseReceivedListener((response) => {
  //         console.log("Notification Clicked!");
  //         console.log(response);
  //       });
  //     return () => {
  //       receivedSubscription.remove();
  //       responseSubscription.remove();
  //     };
  //   }
  // }, []);

  // const triggerLocalNotificationHandler = () => {
  //   Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: "Local Notification",
  //       body: "Nouvelle Tâche!",
  //     },
  //     trigger: { seconds: 2 },
  //   });
  // };

  const [text, setText] = useState();
  const dispatch = useDispatch();

  function handleSumbit() {
    if (text == null || text == "") return;
    dispatch(addTodo(text));
    setText("");
  }

  return (
    <>
      <TextInput
        placeholder="Todo"
        value={text ? text : ""}
        onChangeText={setText}
        style={styles.input}
        theme={{ colors: { primary: STYLE.MAINCOLOR } }}
      />
      {/* <Button
        title="Ajouter"
        onPress={handleSumbit}
        color={STYLE.MAINCOLOR}
        style={{
          marginTop: 10,
          padding: 100,
        }}

      
        
      /> */}

      <Button
        mode="contained"
        onPress={handleSumbit}
        color={STYLE.MAINCOLOR}
        style={{
          marginTop: 10,
          padding: 10,
          margin: 20,
        }}
      >
        Ajouter
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "ghostwhite",
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 20,
    height: 40,
  },
});
