import { Image, Text, View } from "react-native";
import { s } from "./Header.style";

export default function Header() {
  return (
    <View style={s.header}>
      <Image style={s.logo} source={require("../../assets/logo.png")} />
      <Text style={s.title}>You probably have something to do</Text>
    </View>
  );
}
