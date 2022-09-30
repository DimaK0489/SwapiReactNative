import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.green,
    borderWidth: 1,
    borderColor: theme.colors.black,
    borderRadius: 50,
    margin: 10,
    justifyContent: "center"
  },
  info: {
    fontSize: 50,
    color: theme.colors.text,
    paddingLeft: 50,
    fontStyle: 'normal'
  },
  item: {
    fontSize: 25,
    marginTop: 20,
    color: theme.colors.black
  }
});
