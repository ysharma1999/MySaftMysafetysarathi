import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GradientScreenWithTabs from '../screens/Maps';
import ProfileScreen from '../screens/profile-screen';
import { ChatSvg, DiscoverSvg, FlicksSvg, MapsPinSvg, PlusIconSvg, PlusSvg } from '../components/icons';

interface CustomTabBarButtonProps {
    children: React.ReactNode;
    onPress: () => void;
}

const MapsScreen = () => <View style={styles.screenContainer}><Text>Maps Screen</Text></View>;
const DiscoverScreen = () => <View style={styles.screenContainer}><Text>Discover Screen</Text></View>;
const AddScreen = () => <View style={styles.screenContainer}><Text>Add Screen</Text></View>;
const ChatScreen = () => <View style={styles.screenContainer}><Text>Chat Screen</Text></View>;
const FlicksScreen = () => <View style={styles.screenContainer}><Text>Flicks Screen</Text></View>;

const Tab = createBottomTabNavigator();

function CustomTabBarButton({ children, onPress }: CustomTabBarButtonProps) {
    return (
        <TouchableOpacity
            style={styles.addButtonContainer}
            onPress={onPress}
        >
            <View style={styles.addButtonInner}>
                {children}
            </View>
        </TouchableOpacity>
    );
}

function BottomTabBar() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: styles.bottomTabs,
                tabBarActiveTintColor: ' rgba(26, 199, 158, 1)',
                tabBarInactiveTintColor: '#777',
                headerShown: false,
            }}
        >

            <Tab.Screen
                name="Maps"
                component={GradientScreenWithTabs}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MapsPinSvg stroke={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Discover"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <DiscoverSvg stroke={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={AddScreen}
                options={{
                    tabBarIcon: () => (
                        <PlusSvg   />
                    ),
                    tabBarButton: (props : any) => (
                        <CustomTabBarButton {...props} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ChatSvg stroke={color} />
                    ),

                }}
            />
            <Tab.Screen
                name="Flicks"
                component={FlicksScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FlicksSvg stroke={color} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTabs: {
        height: 60,
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: -3 },
        shadowRadius: 5,
        backgroundColor: 'rgba(53, 54, 56, 1)',
        borderTopWidth: 0,
    },
    addButtonContainer: {
        paddingTop: 8,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonInner: {
        width: 37,
        height: 37,
        borderRadius: 100,
        backgroundColor: 'rgba(26, 199, 158, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#17E5A1',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 8,
        elevation: 5,
    },
});

export default BottomTabBar;