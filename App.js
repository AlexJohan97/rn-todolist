import { Alert, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { useEffect, useRef, useState } from "react";
import { TodoTypes } from "./utils/todoTypes";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

let isFirstRender = true;
let isLoadUpdated = false;
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoType, setTodoType] = useState(TodoTypes.ALL);
  const [isAddDialogDisplayed, setIsAddDialogDisplayed] = useState(false);
  const [dialogInputText, setDialogInputText] = useState("");
  const scrollViewRef = useRef(null);

  useEffect(() => {
    loadStorage();
  }, []);

  useEffect(() => {
    if (!isLoadUpdated) {
      isLoadUpdated = true;
    } else {
      if (isFirstRender) {
        isFirstRender = false;
        return;
      } else {
        saveStorage();
      }
    }
  }, [todoList]);

  async function saveStorage() {
    try {
      await AsyncStorage.setItem("@todoList", JSON.stringify(todoList));
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  }

  async function loadStorage() {
    try {
      const storedTodoList = await JSON.parse(
        await AsyncStorage.getItem("@todoList")
      );
      if (storedTodoList) {
        setTodoList(storedTodoList);
      }
    } catch (error) {
      Alert.alert("Error2", error.message);
    }
  }

  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      task: dialogInputText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setIsAddDialogDisplayed(false);
    setDialogInputText("");
    saveStorage();
    setTimeout(() => {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }, 300);
  }

  function renderAddDialog() {
    return (
      <Dialog.Container
        visible={isAddDialogDisplayed}
        onBackdropPress={() => setIsAddDialogDisplayed(false)}
      >
        <Dialog.Title>Add Todo</Dialog.Title>
        <Dialog.Description>Choose a name for your todo</Dialog.Description>
        <Dialog.Input
          onChangeText={(text) => setDialogInputText(text)}
          label="Ex: Go to dentist"
        />
        <Dialog.Button
          label="Cancel"
          onPress={() => setIsAddDialogDisplayed(false)}
          color={"gray"}
        />
        <Dialog.Button
          disabled={!dialogInputText}
          label="Save"
          onPress={() => addTodo()}
        />
      </Dialog.Container>
    );
  }

  function displayAddDialog() {
    setIsAddDialogDisplayed(true);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <Header />
          <Body
            todoList={todoList}
            todoType={todoType}
            setTodoList={setTodoList}
            displayAddDialog={displayAddDialog}
            saveStorage={saveStorage}
            scrollViewRef={scrollViewRef}
          />
        </SafeAreaView>
      </SafeAreaProvider>
      <Footer
        todoList={todoList}
        todoType={todoType}
        setTodoType={setTodoType}
      />
      <View>{renderAddDialog()}</View>
    </>
  );
}
