import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 120
  },
  title: {
    paddingBottom: 30,
    fontSize: 100,
    color: theme.colors.black,
    fontFamily: "cursive",
    fontWeight: "bold",
    fontStyle: "italic"
  }
});

export default styles;
