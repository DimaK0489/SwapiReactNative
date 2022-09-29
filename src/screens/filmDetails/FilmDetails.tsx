import React, { useState } from "react";
import { Button, Text } from "react-native";
import { useFetchFilmsDetailsQuery } from "../../api/defaultAPI";
import Preloader from "../../components/preloader";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../navigation/constants/screens";

const FilmDetails = () => {
  const { navigate } = useNavigation();
  const { data: details, isLoading } = useFetchFilmsDetailsQuery(id);

  // function randomInteger(min: number, max: number) {
  //   const rand = min + Math.random() * (max + 1 - min);
  //   return Math.floor(rand);
  // }
  //const [filmId, setFilmId] = useState<any>(randomInteger(1,6));


  const getIdFromUrl = (url: string) => url.slice(0, -1).split("/").pop();
  const id = getIdFromUrl(details?.url as string)



  console.log(details?.url);
  return isLoading ? (
    <Preloader title={"Loading..."} />
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.item}>Name: {details?.title}</Text>
      <Text style={styles.item}>Director: {details?.director}</Text>
      <Text style={styles.item}>Producer: {details?.producer}</Text>
      <Text style={styles.item}>Release date: {details?.release_date}</Text>
      <Button title={"Go to People"} onPress={() => navigate(SCREEN.PEOPLE)} />
    </SafeAreaView>
  );
};

export default FilmDetails;
