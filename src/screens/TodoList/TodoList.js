import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ToDo } from "./toDo";
import { AddTodo } from "./AddTodo";

function TodoList({ navigation }) {
  return (
    <ScrollView style={{
      backgroundColor: "#fff"
    }}>
      <AddTodo />
      <ToDo />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default TodoList;
