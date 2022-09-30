import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useFetchFilmsQuery } from "../../api/defaultAPI";
import Preloader from "../../components/preloader";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../navigation/constants/screens";

const Films = () => {
  const { navigate } = useNavigation();
  const { data: films, error, isLoading } = useFetchFilmsQuery("");

  return isLoading ? (
    <Preloader title={"Loading..."} />
  ) : (
    <View style={styles.container}>
      <ScrollView>
        {error && <Text style={styles.error}> Error occurred </Text>}
        <View>
          {films && films.results.map((film) => {
            const idUrl = film.url.slice(0, -1).split("/").pop();
            return (
              <View style={styles.filmItem} key={film.title}>
                <Pressable onPress={() => navigate(SCREEN.FILM_DETAILS, { id: idUrl })}>
                  <Text style={styles.item}>{film.title}</Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Films;
