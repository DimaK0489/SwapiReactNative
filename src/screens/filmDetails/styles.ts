import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.fgColor,
    borderRadius: 50,
    margin: 10,
    alignItems: "flex-start"
  },
  item: {
    fontSize: 25,
    marginTop: 20,
    color: theme.colors.black
  }
});
