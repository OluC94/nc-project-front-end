import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//screens
import HomeScreen from "./HomeScreen";
import Event from "./Event";
import AddEvent from "./AddEvent";
import Login from "./Login";
import PlanetScreen from "./PlanetScreen";

const homeName = "Home";
const eventAdder = "Add Event";
const event = "View Event";
const planets = "View Planets";
const signOut = "Sign Out";

const Tab = createBottomTabNavigator();


export default function BottomBar(){
    return (
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if(rn === eventAdder) {
                        iconName = focused ? 'list' : 'list-outline'
                    } else if(rn === event) {
                        iconName = focused ? 'document-text' : 'document-text-outline'
                    } else if(rn === planets) {
                        iconName = focused ? 'planet' : 'planet-outline'
                    } else if(rn === signOut) {
                        iconName = focused ? 'log-out' : 'log-out-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}>
           

            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={eventAdder} component={AddEvent}/>
            <Tab.Screen name={event} component={Event}/>
            <Tab.Screen name={planets} component={PlanetScreen}/>
            <Tab.Screen name={signOut} component={Login}/>

            </Tab.Navigator>
    )
}
