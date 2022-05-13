import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/toDoSlice';
import * as Notifications from "expo-notifications"
import * as Permissions from "expo-permissions"
import { ScrollView } from 'react-native-web';

// Show notifications when the app is in the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    }
  },
})



export const AddTodo = () => {

  useEffect(() => {
    // Permission for iOS
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then(statusObj => {
        // Check if we already have permission
        if (statusObj.status !== "granted") {
          // If permission is not there, ask for the same
          return Permissions.askAsync(Permissions.NOTIFICATIONS)
        }
        return statusObj
      })
      .then(statusObj => {
        // If permission is still not given throw error
        if (statusObj.status !== "granted") {
          throw new Error("Permission not granted")
        }
      })
      .then(() => {
        return Notifications.getExpoPushTokenAsync()
      })
      .then(response => {
        const deviceToken = response.data
        console.log("toooken")
        console.log({  deviceToken })
      })
      .catch(err => {
        return null
      })
  }, [])

  useEffect(() => {
    const receivedSubscription = Notifications.addNotificationReceivedListener(
      notification => {
        console.log("Notification Received!")
        console.log(notification)
      }
    )

       
    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log("Notification Clicked!")
        console.log(response)
      })
    return () => {
      receivedSubscription.remove()
      responseSubscription.remove()
    }
  }, [])

  const triggerLocalNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Local Notification",
        body: "Nouvelle Tâche!",
      },
      trigger: { seconds: 2 },
    })
  }






  const [text, setText] = useState();
  const dispatch = useDispatch();

  function handleSumbit(){

    if(text == null || text == '') return;
    dispatch(addTodo(text));
    triggerLocalNotificationHandler();
    setText('');


  }

  return (
     <>
       <TextInput placeholder="Todo" value={text} onChangeText={setText} style={styles.input} />
      <Button title="Add" onPress={handleSumbit}/>
     </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2
  },
  input: {
    backgroundColor: 'ghostwhite',
    marginBottom: 8,
    padding: 8,
    height: 40,
  },
});
