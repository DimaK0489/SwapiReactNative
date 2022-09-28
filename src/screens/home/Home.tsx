import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../navigation/constants/screens";
import CustomButton from "../../components/customButton";
import styles from "./styles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}> List </Text>
      <CustomButton title={"Films"} onPress={() => navigation.navigate(SCREEN.FILMS)} />
      <CustomButton title={"People"} onPress={() => navigation.navigate(SCREEN.PEOPLE)} />
    </View>
  );
};

export default Home;
