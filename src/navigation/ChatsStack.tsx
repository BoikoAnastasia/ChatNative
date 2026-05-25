import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screen
import { HomeScreen } from '../screens/HomeScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { SingUp } from '../screens/SingUp';

const Stack = createNativeStackNavigator();

export const ChatsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
