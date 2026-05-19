import { NavigationContainer } from '@react-navigation/native';
// components
import { TabsNavigator } from './TabsNavigator';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};
