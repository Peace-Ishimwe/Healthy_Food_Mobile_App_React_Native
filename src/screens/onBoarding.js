import React, { useRef } from 'react';
import PageOnBoarding from '../components/OnBoarding/Page';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';

const OnBoarding = () => {
    const pageRef = useRef();
    const navigation = useNavigation();

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 0 && pageNumber <= 3) {
            pageRef.current.setPage(pageNumber);
        }
    }

    return (
        <View className="bg-white h-[100vh]">
            <View className="h-[20vh] flex items-center justify-center">
                <Image
                    source={require('../../assets/Images/kcal.png')}
                    className="w-[78px] h-[32px]"
                />
            </View>
            <PagerView style={{ flex: 1 }} initialPage={0} ref={pageRef}>
                <View key={1}>
                    <PageOnBoarding
                        imageSrc={require("../../assets/Images/Food-cuate.png")}
                        mainText={"Eat Healthy"}
                        descText={"Maintaining good health should be the primary focus of everyone."}
                        pageNo={1}
                        onPress={() => handlePageChange(1)}
                    />
                </View>
                <View key={2}>
                    <PageOnBoarding
                        imageSrc={require("../../assets/Images/Food-cuate.png")}
                        mainText={"Healthy Recipes"}
                        descText={"Browse thousands of healthy recipes from all over the world."}
                        pageNo={2}
                        onPress={() => handlePageChange(2)}
                    />
                </View>
                <View key={3}>
                    <PageOnBoarding
                        imageSrc={require("../../assets/Images/Food-cuate.png")}
                        mainText={"Track Your Health"}
                        descText={"With amazing inbuilt tools you can track your progress."}
                        pageNo={3}
                        onPress={() => handlePageChange(3)}
                    />
                </View>
            </PagerView>
            <View className="pb-12">
                <Pressable onPress={()=>{navigation.navigate("main")}} className="bg-mainColor w-8/12 mx-auto flex items-center py-5 rounded-3xl">
                    <Text className="text-white font-semibold text-2xl">Get Started</Text>
                </Pressable>
                <Text className="capitalize text-center mt-3 text-[#7C7C7C]">
                    Already have an account?
                    <Text className="text-mainColor text-base"> Login In</Text>
                </Text>
            </View>
        </View>
    );
}

export default OnBoarding;
