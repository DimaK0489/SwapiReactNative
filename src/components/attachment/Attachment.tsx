import React from "react";
import { styles } from "./styles";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  title: string
  data: any,
}

const Attachment = ({title, data}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.info}>{title}: {data.title}</Text>
      <Text style={styles.item}>{title}: {data.director}</Text>
      <Text style={styles.item}>{title}: {data.producer}</Text>
      <Text style={styles.item}>{title}: {data as string}</Text>
      <Text style={styles.item}>{title}: {data as string}</Text>
    </SafeAreaView>
  );
};

export default Attachment;
