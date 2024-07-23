import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
      <View className="flex items-center justify-center bg-white flex-1">
        <Text className="font-pblack text-3xl">Aora!</Text>
        <Link href={"home"} className="text-black">
          Go to Home
        </Link>
        <StatusBar style="auto" />
      </View>
  );
}
