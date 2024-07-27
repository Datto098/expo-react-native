import { View, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
const SignUp = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.username || !form.password) {
      Alert.alert("Error", "Please fill all fields");
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
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
          Sign Up
        </Text>

        <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e) => {
            setForm({ ...form, username: e });
          }}
          otherStyles="mt-7"
          keyboardType="password"
        />
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

        <CustomButton
          title="Sign Up"
          containerStyles={"mt-7"}
          handlePress={submit}
          isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2 items-center">
          <Text className="text-lg text-gray-100 font-pregular ">
            Already have account ?
          </Text>
          <Link className="text-lg text-secondary" href={"/signin"}>
            Login
          </Link>
        </View>
      </View>
    </Wrapper>
  );
};

export default SignUp;
