import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Container({ children }) {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView className="bg-neutral-900 flex-1">
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 32,
          }}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
