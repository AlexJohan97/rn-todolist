import { Text, View } from "react-native";
import { s } from "./Footer.style";
import { TodoTypes } from "../../utils/todoTypes";

export default function Footer({ todoList, todoType, setTodoType }) {
  const inProgressCount = todoList.filter((todo) => !todo.completed).length;
  const doneCount = todoList.filter((todo) => todo.completed).length;
  function updateTodoType(type) {
    switch (type) {
      case TodoTypes.ALL:
        return setTodoType(TodoTypes.ALL);
      case TodoTypes.IN_PROGRESS:
        return setTodoType(TodoTypes.IN_PROGRESS);
      case TodoTypes.DONE:
        return setTodoType(TodoTypes.DONE);
    }
  }

  function getTextStyle(type) {
    if (type === todoType) {
      return s.titleActive;
    } else {
      return s.title;
    }
  }

  return (
    <View style={s.footer}>
      <Text
        onPress={() => updateTodoType(TodoTypes.ALL)}
        style={getTextStyle(TodoTypes.ALL)}
      >{`All (${todoList.length})`}</Text>
      <Text
        onPress={() => updateTodoType(TodoTypes.IN_PROGRESS)}
        style={getTextStyle(TodoTypes.IN_PROGRESS)}
      >{`In progress (${inProgressCount})`}</Text>
      <Text
        onPress={() => updateTodoType(TodoTypes.DONE)}
        style={getTextStyle(TodoTypes.DONE)}
      >{`Done (${doneCount})`}</Text>
    </View>
  );
}
