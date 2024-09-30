import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  addTodo: {
    backgroundColor: "#4d63bdff",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    position: "absolute",
    right: 30,
    bottom: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    padding: 10,
  },
  title: {
    fontSize: 15,
    color: "white",
  },
});
