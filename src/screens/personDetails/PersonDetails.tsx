import React from "react";
import { Button, Text } from "react-native";
import { useFetchPersonDetailsQuery } from "../../api/defaultAPI";
import Preloader from "../../components/preloader";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../navigation/constants/screens";

const PersonDetails = () => {
  const navigation = useNavigation();
  const { data: details, isLoading } = useFetchPersonDetailsQuery(4);

  return isLoading ? (
    <Preloader title={"Loading..."} />
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.item}>Name: {details?.name}</Text>
      <Text style={styles.item}>Gender: {details?.gender}</Text>
      <Text style={styles.item}>Hair color: {details?.hair_color}</Text>
      <Text style={styles.item}>Birth year: {details?.birth_year}</Text>
      <Button title={"Go to Films"} onPress={() => navigation.navigate(SCREEN.FILMS)} />
    </SafeAreaView>
  );
};

export default PersonDetails;
