import React from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
    return (
        <View className="bg-white">
            <ScrollView className="bg-white h-full">
                <View className="h-[22vh] flex items-center justify-center">
                    <Text className="text-mainColor text-[27px] font-bold">Hello, Peace Ishimwe</Text>
                    <Text className="text-[#7B7B7B] text-xl">  Find, track and eat healthy food.</Text>
                </View>
                <View className="flex flex-row gap-5 w-fit mx-auto bg-[#efececa1] p-5 rounded-3xl">
                    <View>
                        <Text className="text-[#FF806E] text-base font-semibold uppercase">Article</Text>
                        <Text className="text-[#330600] text-[20px] font-semibold">The pros and {"\n"} cons of fast food.</Text>
                        <Pressable className="flex-row bg-[#FF8473] w-8/12 py-2 mt-2 rounded-xl px-2 flex items-center justify-center">
                            <Text className="text-white font-semibold">Read Now </Text>
                            <AntDesign name="caretright" size={14} color="white" />
                        </Pressable>
                    </View>
                    <View>
                        <Image source={require("../../assets/Images/Burger.png")} />
                    </View>
                </View>
                <View className="flex flex-row w-fit mx-auto bg-[#A3A0CA] rounded-3xl mt-10 items-center px-8 py-5">
                    <Text className="text-white font-semibold text-xl">Track Your {"\n"}Weekly Progress</Text>
                    <Pressable className="flex flex-row ml-8 items-center justify-center bg-white px-3 py-2 rounded-lg">
                        <Text className="text-[#A3A0CA] font-semibold">View Now</Text>
                        <AntDesign name="caretright" size={12} color="#A3A0CA" />
                    </Pressable>
                </View>
                <View className="pl-9">
                    <Text className="text-xl font-semibold mt-4">Choose Your Favorites</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="gap-5 mt-1">
                        <View className="p-5 bg-[#efececa1] w-[140px] py- flex items-center justify-center rounded-3xl">
                            <Image
                                source={require("../../assets/Images/StrawBerry.png")}
                            />
                            <Text className="font-semibold text-base">Fruits</Text>
                        </View>
                        <View className="p-5 bg-[#efececa1] w-[140px] py- flex items-center justify-center rounded-3xl">
                            <Image
                                source={require("../../assets/Images/vegetables.png")}
                            />
                            <Text className="font-semibold text-base ">Vegetables</Text>
                        </View>
                        <View className="p-5 bg-[#efececa1] w-[140px] py- flex items-center justify-center rounded-3xl">
                            <Image
                                source={require("../../assets/Images/Snacks.png")}
                            />
                            <Text className="font-semibold text-base">Snacks</Text>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home