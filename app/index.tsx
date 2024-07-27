import CustomButton from "@/components/CustomButton";
import Wrapper from "@/components/Wrapper";
import { images } from "@/constants";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "@/contexts/GlobalProvider";

export default function HomeScreen() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) {
    return <Redirect href={"/home"} />;
  }

  return (
    <Wrapper>
      <View className="w-full min-h-[85vh] items-center justify-center px-4">
        <Image
          source={images.logo}
          className="w-[130px] h-[84px]"
          resizeMode="contain"
        />
        <Image
          source={images.cards}
          className="max-w-[300px] w-full h-[300px]"
          resizeMode="contain"
        />
        <View className="relative mt-4">
          <Text className="text-white font-psemibold text-3xl text-center">
            Discover Endless Possibilities with{" "}
            <Text className="text-secondary-200">Aora</Text>
          </Text>
          <Image
            source={images.path}
            className="absolute -bottom-1 -right-0 w-[136px] h-[15px]"
            resizeMode="contain"
          />
        </View>

        <Text className="text-gray-100 text-sm font-pregular text-center mt-7">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>

        <CustomButton
          title="Continute with Email"
          handlePress={() => router.push("/signin")}
          containerStyles="w-full mt-7"
          isLoading={false}
        />
      </View>
    </Wrapper>
  );
}
