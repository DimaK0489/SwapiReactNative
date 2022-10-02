import React, { useState } from "react";
import { Button, Pressable, ScrollView, Text, View } from "react-native";
import { useFetchPeopleQuery } from "../../api/defaultAPI";
import { useNavigation } from "@react-navigation/native";
import Preloader from "../../components/preloader";
import { styles } from "./styles";
import { SCREEN } from "../../navigation/constants/screens";

const People = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState<any>(1)
  const { data: people, isLoading, error } = useFetchPeopleQuery(page);

  return isLoading ? (
    <Preloader title={"Loading..."} />
  ) : (
    <View style={styles.container}>
      <ScrollView>
        {error && <Text style={styles.error}> Error occurred </Text>}
        <View>
          {people && people.results.map((person) => {
            const idUrl = person.url.slice(0, -1).split("/").pop();
            return (
              <View style={styles.personItem} key={person.created}>
                <Pressable onPress={() => navigation?.navigate(SCREEN.PERSON_DETAILS, { id: idUrl })}>
                  <Text style={styles.item}>{person.name}</Text>
                </Pressable>
              </View>
            );
          })}
          <View style={{flexDirection: 'row-reverse', justifyContent: 'space-around', padding: 20}}>
            <Button title={"next"} onPress={() => setPage(page +1 )} disabled={page === 9}/>
            <Button title={"previous"} onPress={() => setPage(page -1)} disabled={page === 1}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default People;
