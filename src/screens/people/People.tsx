import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useFetchPeopleQuery } from "../../api/defaultAPI";
import { useNavigation } from "@react-navigation/native";
import Preloader from "../../components/preloader";
import { styles } from "./styles";

const People = () => {
  const navigation = useNavigation();
  const { data: people, isLoading, error } = useFetchPeopleQuery("");
  return isLoading ? (
    <Preloader title={"Loading..."} />
  ) : (
    <View style={styles.container}>
      <ScrollView>
        {error && <Text style={styles.error}> Error occurred </Text>}
        <View>
          {people && people.results.map((person) => {
            return (
              <View style={styles.personItem} key={person.created}>
                <Text style={styles.item}>{person.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};


export default People;
