import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screen
import { HomeScreen } from '../screens/HomeScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { SearchScreen } from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

export const ChatsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: true, title: '' }}
      />
    </Stack.Navigator>
  );
};
