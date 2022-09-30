import React from "react";
import { styles } from "../../screens/personDetails/styles";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  title: string
  data: any,
  nameButton: string,
  onClick: () => void,
}

const Attachment = ({data, nameButton, onClick, title}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.item}>{title}: {data.name}</Text>
      <Button title={nameButton} onPress={() => onClick} />
    </SafeAreaView>
  );
};

export default Attachment;
