import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
// components
import { AppLayout } from '../layout/AppLayout';
import { AppHeader } from '../components/header/AppHeader';
import { CustomButton } from '../components/button/CustomButton';
import { NavMenu } from '../components/nav/NavMenu';
// img
import BgImg from '../assets/img/chatBgImg.png';
import Plus from '../assets/icons/plus.svg';

export const HomeScreen = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppLayout>
      <AppHeader
        title="Чаты"
        right={
          <>
            <CustomButton
              svg={Plus}
              onPress={() => setOpenMenu(prev => !prev)}
            />
            <CustomButton title="S" onPress={() => console.log('S')} />
            <NavMenu visible={openMenu} />
          </>
        }
      />
      <View style={styles.content}>
        <Image source={BgImg} style={styles.image} />
        <Text style={styles.title}>Чат</Text>
        <Text>Ваши личные сообщения полностью зашифрованы.</Text>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 8,
  },
  image: {
    marginBottom: 20,
  },
});
