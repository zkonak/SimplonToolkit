import React from "react";
import { Text, View, StyleSheet } from "react-native";
// import { Checkbox } from "react-native-paper";
import { CheckBox } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../store/toDoSlice";

export function ToDo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  //   const [checked, setChecked] = React.useState(false);

  //   function handleSumbit(id){

  //     dispatch(deleteTodo({id}));

  //   }

  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mission du jour </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des missions</Text>
      {todos.map((todo, index) => (
        <CheckBox
          key={index + 1}
          theme={{
            colors: {
              primary: "red",
            },
          }}
          style={styles.checkbox}
          checked={todo.completed}
          //{checked ? 'checked' : 'unchecked'}

          onPress={() => {
            dispatch(
              toggleTodo(todo.id)
              //  setChecked(!checked)
            );
          }}
          title={`${index + 1}. ${todo.text}`}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  todoText: {
    margin: 4,
  },
  checkbox: {
    margin: 4,
    borderWidth: 1,
    borderColor: "black",
  },
});
