import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
// components
import { AppLayout } from '../layout/AppLayout';
import { AppHeader } from '../components/header/AppHeader';
import { CustomButton } from '../components/button/CustomButton';
import { NavMenu } from '../components/nav/NavMenu';
import { CustomInput } from '../components/input/CustomInput';
import { Accordion } from '../components/accordion/Accordion';
// img
import BgImg from '../assets/img/chatBgImg.png';
import Plus from '../assets/icons/plus.svg';

const isEmpty = false;

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
      {isEmpty ? (
        <View style={styles.contentEmpty}>
          <Image source={BgImg} style={styles.image} />
          <Text style={styles.title}>Чат</Text>
          <Text>Ваши личные сообщения полностью зашифрованы.</Text>
        </View>
      ) : (
        <View style={styles.content}>
          <CustomInput isSearch={true} />
          <Accordion isGroup={true} title={'Группы'} />
          <Accordion isGroup={false} title={'Чаты'} />
        </View>
      )}
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  contentEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    marginBottom: 8,
  },
  image: {
    marginBottom: 20,
  },
});
