import { View, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "@/lib/appwrite";

const SignIn = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill all fields");
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      router.replace("/home");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <View className="w-full justify-center px-4 my-6 min-h-[85vh]">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px] h-[35px]"
        />
        <Text className="text-2xl text-white text-semibold mt-10 font-semibold">
          Log in to Aora
        </Text>
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => {
            setForm({ ...form, email: e });
          }}
          otherStyles="mt-7"
          keyboardType="email-address"
        />

        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => {
            setForm({ ...form, password: e });
          }}
          otherStyles="mt-7"
          keyboardType="password"
        />

        <View className="items-end mt-7">
          <Link href={""} className="text-gray-100">
            Forgot password
          </Link>
        </View>

        <CustomButton
          title="Login"
          containerStyles={"mt-7"}
          handlePress={submit}
          isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2 items-center">
          <Text className="text-lg text-gray-100 font-pregular ">
            Don't have account ?
          </Text>
          <Link className="text-lg text-secondary" href={"/signup"}>
            Sign Up
          </Link>
        </View>
      </View>
    </Wrapper>
  );
};

export default SignIn;
