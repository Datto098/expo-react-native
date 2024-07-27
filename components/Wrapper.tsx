import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        {children}
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Wrapper;