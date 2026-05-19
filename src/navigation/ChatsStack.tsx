import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AppHeader } from '../components/header/AppHeader';
import { CustomButton } from '../components/button/CustomButton';
import Plus from '../assets/icons/plus.svg';

const Stack = createNativeStackNavigator();

export const ChatsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => (
            <AppHeader
              title="Чаты"
              right={
                <>
                  <CustomButton
                    svg={Plus}
                    onPress={() => console.log('pressed')}
                  />
                  <CustomButton
                    title="S"
                    onPress={() => console.log('pressed')}
                  />
                </>
              }
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
