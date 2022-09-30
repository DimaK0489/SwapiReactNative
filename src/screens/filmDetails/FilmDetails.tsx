import React from "react";
import { Text } from "react-native";
import Preloader from "../../components/preloader";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFetchFilmsDetailsQuery } from "../../api/defaultAPI";

const FilmDetails = ({route}: any) => {
  const {id} = route.params;

  const { data: details, isLoading } = useFetchFilmsDetailsQuery(Number(id));

  return isLoading ? (
    <Preloader title={"Loading..."} />
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.info}>Info Film</Text>
      <Text style={styles.item}>Name: {details?.title}</Text>
      <Text style={styles.item}>Director: {details?.director}</Text>
      <Text style={styles.item}>Producer: {details?.producer}</Text>
      <Text style={styles.item}>Release date: {details?.release_date}</Text>
    </SafeAreaView>
  );
};

export default FilmDetails;
