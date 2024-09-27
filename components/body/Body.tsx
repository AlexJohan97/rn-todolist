import { ScrollView, Text, View } from "react-native";
import { s } from "./Body.style";
import CardTodo from "../cardTodo/CardTodo";
import { listOfTasks } from "../../utils/listOfTasks";
import { useState } from "react";
import { TodoTypes } from "../../utils/todoTypes";

export default function Body({ todoList, todoType, setTodoList }) {
  function renderTodoList() {
    switch (todoType) {
      case TodoTypes.IN_PROGRESS:
        const inProgressList = todoList.filter((todo) => !todo.completed);
        return inProgressList.map((todo) => (
          <CardTodo onPress={updateTodo} key={todo.id} todo={todo} />
        ));
      case TodoTypes.DONE:
        const doneList = todoList.filter((todo) => todo.completed);
        return doneList.map((todo) => (
          <CardTodo onPress={updateTodo} key={todo.id} todo={todo} />
        ));
      default:
        return todoList.map((todo) => (
          <CardTodo onPress={updateTodo} key={todo.id} todo={todo} />
        ));
    }
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
  }

  return (
    <View style={s.body}>
      <ScrollView>{renderTodoList()}</ScrollView>
    </View>
  );
}
