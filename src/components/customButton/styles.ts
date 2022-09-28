import {StyleSheet} from 'react-native';
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '60%',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.backgroundColorDefault,
  },
});
