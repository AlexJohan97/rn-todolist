import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./AddTodo.style";

export default function AddTodo() {
  return (
    <TouchableOpacity style={s.addTodo}>
      <Text style={s.title}>+ New Todo</Text>
    </TouchableOpacity>
  );
}
