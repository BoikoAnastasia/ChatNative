import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Components
import { ChatsStack } from './ChatsStack';
// icons
import ChatIcon from '../assets/icons/chat.svg';
import ContactIcon from '../assets/icons/contacts.svg';
import PhoneIcon from '../assets/icons/phone.svg';
import SettingIcon from '../assets/icons/settings.svg';
import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.light.surface3,
        tabBarInactiveTintColor: COLORS.light.surface3,
        tabBarStyle: {
          height: 70,
          paddingTop: 12,
          backgroundColor: COLORS.light.surface1,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <ChatIcon width={24} height={24} />,
        }}
        name="Чаты"
        component={ChatsStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <ContactIcon width={24} height={24} />,
        }}
        name="Звонки"
        component={ChatsStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <PhoneIcon width={24} height={24} />,
        }}
        name="Контакты"
        component={ChatsStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <SettingIcon width={24} height={24} />,
        }}
        name="Настройки"
        component={ChatsStack}
      />
    </Tab.Navigator>
  );
};
