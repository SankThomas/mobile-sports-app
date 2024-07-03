import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";

export default function Leagues({ navigation }) {
  const [leagues, setLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);
      const getLeagues = async () => {
        const res = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
        );
        const data = await res.json();
        setLeagues(data.leagues);
      };

      getLeagues();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container>
      <Text className="text-white font-bold text-2xl text-center">
        Showing {leagues.length} leagues
      </Text>

      <View className="mt-8">
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View className="flex-row flex-wrap space-y-4 items-center justify-between">
            {leagues.map((league) => (
              <TouchableOpacity
                key={league.idLeague}
                onPress={() => navigation.navigate("League", league)}
                className="bg-neutral-800 p-2 rounded-lg w-[160px]"
              >
                <Text className="text-neutral-200">{league.strLeague}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </Container>
  );
}
