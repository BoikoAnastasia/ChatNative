import { StyleSheet, Text, View, Image } from 'react-native';
// components
import { AppLayout } from '../layout/AppLayout';
// img
import BgImg from '../assets/img/chatBgImg.png';

export const HomeScreen = () => {
  return (
    <AppLayout>
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
