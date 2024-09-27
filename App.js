import { Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { listOfTasks } from "./utils/listOfTasks";
import { TodoTypes } from "./utils/todoTypes";

export default function App() {
  const [todoList, setTodoList] = useState(listOfTasks);
  const [todoType, setTodoType] = useState(TodoTypes.ALL);

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <Header />
          <Body
            todoList={todoList}
            todoType={todoType}
            setTodoList={setTodoList}
          />
        </SafeAreaView>
      </SafeAreaProvider>
      <Footer
        todoList={todoList}
        todoType={todoType}
        setTodoType={setTodoType}
      />
    </>
  );
}
