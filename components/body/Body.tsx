import { Alert, ScrollView, Text, View } from "react-native";
import { s } from "./Body.style";
import CardTodo from "../cardTodo/CardTodo";
import { listOfTasks } from "../../utils/listOfTasks";
import { useState } from "react";
import { TodoTypes } from "../../utils/todoTypes";
import AddTodo from "../addTodo/AddTodo";

export default function Body({
  todoList,
  todoType,
  setTodoList,
  displayAddDialog,
  saveStorage,
}) {
  function renderTodoList() {
    let renderlist = todoList;
    switch (todoType) {
      case TodoTypes.IN_PROGRESS:
        renderlist = todoList.filter((todo) => !todo.completed);
        break;
      case TodoTypes.DONE:
        renderlist = todoList.filter((todo) => todo.completed);
        break;
    }
    return renderlist.map((todo) => (
      <CardTodo
        onLongPress={() => deleteTodo(todo.id)}
        onPress={updateTodo}
        key={todo.id}
        todo={todo}
      />
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed,
    };
    const updatedTodoList = [...todoList];
    const index = updatedTodoList.findIndex((t) => t.id === todo.id);
    updatedTodoList[index] = updatedTodo;
    setTodoList(updatedTodoList);
    saveStorage();
  }

  function deleteTodo(id) {
    Alert.alert("Delete Todo", "Are you sure you want to delete this task?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          const updatedTodoList = todoList.filter((todo) => todo.id !== id);
          setTodoList(updatedTodoList);
          saveStorage();
        },
      },
    ]);
  }

  return (
    <>
      <View style={s.body}>
        <ScrollView>{renderTodoList()}</ScrollView>
      </View>
      <AddTodo displayAddDialog={displayAddDialog} />
    </>
  );
}
