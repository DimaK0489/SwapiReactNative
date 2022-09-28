import React from 'react';
import { ActivityIndicator, Text, View } from "react-native";
import styles from './styles';
import { theme } from "../../styles/theme";

interface Props {
  title?: string;
}

const Preloader = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ActivityIndicator
        color={theme.colors.green}
        animating={true}
        size={'large'}
      />
    </View>
  );
};
export default Preloader;
