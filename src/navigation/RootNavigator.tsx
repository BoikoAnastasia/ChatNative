import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// components
import { TabsNavigator } from './TabsNavigator';
import { AuthStack } from './AuthStack';
import { useAuth } from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { isAuth } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuth ? (
          <Stack.Screen name="App" component={TabsNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
