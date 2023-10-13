import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign , MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import Home from "../screens/Home";
const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        padding: 10,
        width: '100%',
        height: 94,
        zIndex: 0,
    },
    tabBarActiveTintColor: '#91C788',
    tabBarInactiveTintColor: '#999999',
};

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo
                                name="home"
                                size={24}
                                color={focused ? '#91C788' : '#999999'}
                            />
                            <Text style={{ fontSize: 12, color: focused ? '#91C788' : '#999999' }}>
                                HOME
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="search"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign
                                name="search1"
                                size={24}
                                color={focused ? '#91C788' : '#999999'}
                            />
                            <Text style={{ fontSize: 12, color: focused ? '#91C788' : '#999999' }}>
                                SEARCH
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="scan"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo
                                name="camera"
                                size={24}
                                color={focused ? '#91C788' : '#999999'}
                            />
                            <Text style={{ fontSize: 12, color: focused ? '#91C788' : '#999999' }}>
                                SCAN
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="like"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo
                                name="heart"
                                size={24}
                                color={focused ? '#91C788' : '#999999'}
                            />
                            <Text style={{ fontSize: 12, color: focused ? '#91C788' : '#999999' }}>
                                LIKE
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="account"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons
                                name="account"
                                size={24}
                                color={focused ? '#91C788' : '#999999'}
                            />
                            <Text style={{ fontSize: 12, color: focused ? '#91C788' : '#999999' }}>
                                ACCOUNT
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
