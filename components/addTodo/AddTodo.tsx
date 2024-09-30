import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./AddTodo.style";

export default function AddTodo({ displayAddDialog }) {
  return (
    <TouchableOpacity style={s.addTodo} onPress={displayAddDialog}>
      <Text style={s.title}>+ New Todo</Text>
    </TouchableOpacity>
  );
}
