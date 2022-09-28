import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
  },
  item: {
    padding: 10,
    fontSize: 25,
    marginTop: 5,
    color: theme.colors.black
  },
  filmItem: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 50, margin: 10, alignItems: "center"
  },
  error: {
    fontSize: 30,
    alignItems: "center",
    color: theme.colors.error
  }
});
