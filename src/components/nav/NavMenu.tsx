import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// styles
import { COLORS } from '../../constants/colors';

type Props = {
  visible: boolean;
};

export const NavMenu = ({ visible }: Props) => {
  const navigation = useNavigation<any>();

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.nav}>
      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.text}>Добавить друзей</Text>
      </Pressable>

      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.text}>Новая группа</Text>
      </Pressable>

      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.text}>Еще</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    right: 70,
    top: 50,
    backgroundColor: COLORS.light.surface2,
    padding: 10,
    borderRadius: 8,
    zIndex: 10,
    elevation: 5,
  },
  item: {
    padding: 10,
  },
  text: {},
});
