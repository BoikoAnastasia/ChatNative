import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screen
import { SingUp } from '../screens/SingUp';
import { SingIn } from '../screens/SingIn';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="SingIn" component={SingIn} />
    </Stack.Navigator>
  );
};
