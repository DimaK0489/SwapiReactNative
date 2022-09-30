import React from "react";
import { Text } from "react-native";
import { useFetchPersonDetailsQuery } from "../../api/defaultAPI";
import Preloader from "../../components/preloader";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const PersonDetails = ({ route }: any) => {
  const { id } = route.params;

  const { data: details, isLoading } = useFetchPersonDetailsQuery(id);

  return isLoading ? (
    <Preloader title={"Loading..."} />
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.info}>Info Person</Text>
      <Text style={styles.item}>Name: {details?.name}</Text>
      <Text style={styles.item}>Gender: {details?.gender}</Text>
      <Text style={styles.item}>Hair color: {details?.hair_color}</Text>
      <Text style={styles.item}>Birth year: {details?.birth_year}</Text>
    </SafeAreaView>
  );
};

export default PersonDetails;
