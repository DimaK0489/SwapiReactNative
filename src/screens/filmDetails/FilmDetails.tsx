import React from "react";
import { Button, Text } from "react-native";
import { useFetchFilmsDetailsQuery } from "../../api/defaultAPI";
import Preloader from "../../components/preloader";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../navigation/constants/screens";

const FilmDetails = () => {
  const navigation = useNavigation();
  const { data: details, isLoading, error } = useFetchFilmsDetailsQuery("");

  return isLoading ? (
    <Preloader title={"Loading..."} />
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.item}>Name: {details?.title}</Text>
      <Text style={styles.item}>Director: {details?.director}</Text>
      <Text style={styles.item}>Producer: {details?.producer}</Text>
      <Text style={styles.item}>Release date: {details?.release_date}</Text>
      <Button title={"Go to People"} onPress={() => navigation.navigate(SCREEN.PEOPLE)} />
    </SafeAreaView>
  );
};

export default FilmDetails;
