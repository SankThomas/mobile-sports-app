import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import Container from "../components/Container";
import Entypo from "@expo/vector-icons/Entypo";

export default function Team({ route, navigation }) {
  return (
    <Container>
      <View className="space-y-6">
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="mb-4"
          >
            <Entypo name="chevron-left" size={28} color="#fff" />
          </TouchableOpacity>

          <Text className="text-white text-2xl">{route.params.strTeam}</Text>
          {route.params.strTeamAlternate ? (
            <Text className="text-neutral-400">
              {route.params.strTeamAlternate}
            </Text>
          ) : null}
        </View>

        <View>
          <Text className="text-neutral-400 text-[13px] leading-6">
            {route.params.strDescriptionEN}
          </Text>
        </View>

        <View>
          <Text className="text-white font-bold text-xl mb-4">
            Team Badge and Jersey
          </Text>

          <View className="flex-row items-center justify-between">
            <Image
              source={{ uri: route.params.strBadge }}
              className="w-28 h-36"
            />
            <Image
              source={{ uri: route.params.strKit }}
              className="w-28 h-36"
            />
          </View>
        </View>

        {route.params.strFanart1 ? (
          <View>
            <Text className="text-white font-bold text-xl mb-4">Images</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="space-x-4"
            >
              {route.params.strFanart1 ? (
                <Image
                  source={{ uri: route.params.strFanart1 }}
                  className="w-[280px] h-52 rounded-lg"
                />
              ) : null}
              {route.params.strFanart2 ? (
                <Image
                  source={{ uri: route.params.strFanart2 }}
                  className="w-[280px] h-52 rounded-lg"
                />
              ) : null}
              {route.params.strFanart3 ? (
                <Image
                  source={{ uri: route.params.strFanart3 }}
                  className="w-[280px] h-52 rounded-lg"
                />
              ) : null}
              {route.params.strFanart4 ? (
                <Image
                  source={{ uri: route.params.strFanart4 }}
                  className="w-[280px] h-52 rounded-lg"
                />
              ) : null}
            </ScrollView>
          </View>
        ) : null}
      </View>
    </Container>
  );
}
