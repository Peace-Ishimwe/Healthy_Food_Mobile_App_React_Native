import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const PageOnBoarding = ({ imageSrc, mainText, descText, pageNo , onPress }) => {
    return (
        <View className="flex justify-center items-center">
            <Image source={imageSrc} />
            <View className="flex items-center justify-center mt-10">
                <Text className="text-3xl font-bold">{mainText}</Text>
                <Text className="text-center w-[273px] text-black/[0.45] text-base mt-2">
                    {descText}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, gap: 3 }}>
                    <TouchableOpacity onPress={onPress} style={{ borderRadius: 999, backgroundColor: pageNo === 1 ? '#FF8473' : '#FFC0B8', height: pageNo === 1 ? 13 : 10, width: pageNo === 1 ? 20 : 18 }}></TouchableOpacity>
                    <TouchableOpacity onPress={onPress} style={{ borderRadius: 999, backgroundColor: pageNo === 2 ? '#FF8473' : '#FFC0B8', height: pageNo === 2 ? 13 : 10, width: pageNo === 2 ? 20 : 18 }}></TouchableOpacity>
                    <TouchableOpacity onPress={onPress} style={{ borderRadius: 999, backgroundColor: pageNo === 3 ? '#FF8473' : '#FFC0B8', height: pageNo === 3 ? 13 : 10, width: pageNo === 3 ? 20 : 18 }}></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PageOnBoarding