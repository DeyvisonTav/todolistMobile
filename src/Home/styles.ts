import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    height: "100%",
  },
  input: {
    backgroundColor: "#262626",
    width: 271,
    height: 54,
    borderRadius: 6,
    padding: 16,
    color: "#F2F2F2",
  },
  form: {
    marginTop: 148,
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 6,
  },
  imgButton: {
    color: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
  },
  listEmptyText: {
    marginHorizontal: 10,
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
  },
  listEmptyText1: {
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#808080",
    fontSize: 15,
    textAlign: "center",
  },
  containerList: {
    marginHorizontal: 40,
    marginTop: 60,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
  
  },
  containerListTextCreate: {
    color: "#4EA8DE",
    fontWeight: "bold",
    marginRight: 8,
  },
  containerListTextFinish: {
    color: "#8284FA",
    fontWeight: "bold",
    marginRight: 10,
  },
  clipBoardImg: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
    marginBottom: 24,
  },
  containerEmpyList: {
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },
  numbList: {
    color: "white",
    backgroundColor: "#333333",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 15,
    padding: 1,
    width: 30,
    fontSize: 12
  },
  containerTasksPub: {
    display: "flex",
    flexDirection: "row",
  },
});
