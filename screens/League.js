import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";

export default function League({ route, navigation }) {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);
      const getTeams = async () => {
        const res = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${route.params.strLeague}`
        );
        const data = await res.json();
        setTeams(data.teams);
      };

      getTeams();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container>
      <Text className="text-white text-2xl font-bold mb-8 text-center">
        {route.params.strLeague}
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View className="flex-row flex-wrap justify-between gap-4">
          {teams.map((team) => (
            <TouchableOpacity
              key={team.idTeam}
              onPress={() => navigation.navigate("Team", team)}
              className="w-[155px] bg-neutral-800 p-2 rounded-lg"
            >
              <Image source={{ uri: team.strBadge }} className="w-full h-36" />
              <Text className="text-center text-white font-semibold mt-2">
                {team.strTeam}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </Container>
  );
}
