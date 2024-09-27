import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    borderRadius: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    flex: 1,
  },
  titleCompleted: {
    fontSize: 20,
    flex: 1,
    textDecorationLine: "line-through",
  },
  check: {
    height: 20,
    width: 20,
  },
});
