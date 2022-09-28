import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useFetchFilmsQuery } from "../../api/defaultAPI";
import Preloader from "../../components/preloader";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../navigation/constants/screens";

const Films = () => {
  const navigation = useNavigation();
  const { data: films, isLoading, error } = useFetchFilmsQuery("");

  return isLoading ? (
    <Preloader title={"Loading..."} />
  ) : (
    <View style={styles.container}>
      <ScrollView>
        {error && <Text style={styles.error}> Error occurred </Text>}
        <View>
          {films && films.results.map((film) => {
            return (
              <View style={styles.filmItem} key={film.episode_id}>
                <Pressable onPress={() => navigation?.navigate(SCREEN.FILM_DETAILS)}>
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
