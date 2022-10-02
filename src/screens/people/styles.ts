import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10
  },
  item: {
    padding: 10,
    fontSize: 25,
    marginTop: 5
  },
  error: {
    fontSize: 30,
    alignItems: "center",
    color: theme.colors.error
  },
  personItem: {
    backgroundColor: theme.colors.green,
    color: theme.colors.black,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    margin: 5,
    alignItems: "center"
  },
  pagination: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    padding: 20,
  }
});

