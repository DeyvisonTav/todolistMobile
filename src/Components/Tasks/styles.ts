import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: 331,
    height: 58,
    marginLeft: 40,
    justifyContent: "space-between",
    backgroundColor: "#262626",
    borderRadius: 8,
    paddingHorizontal: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  taskText: {
    maxWidth: 220,
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: "bold",
  },
  taskTextCheked: {
    color: "#808080",
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
  button: {
    height: 18,
    width: 18
  },

  buttonImg: {
    width: 16,
    height: 16,
  },
  buttonImgDisable: {
    display: "none",
  },
});
