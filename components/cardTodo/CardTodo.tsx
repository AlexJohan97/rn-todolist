import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardTodo.style";

interface Props {
  todo: {
    task: string;
    completed: boolean;
  };
  onPress: any;
}

export default function CardTodo({ todo, onPress }: Props) {
  const { task, completed } = todo;
  return (
    <TouchableOpacity onPress={() => onPress(todo)} style={s.card}>
      <Text style={completed ? s.titleCompleted : s.title}>{task}</Text>
      {completed && (
        <Image style={s.check} source={require("../../assets/check.png")} />
      )}
    </TouchableOpacity>
  );
}
