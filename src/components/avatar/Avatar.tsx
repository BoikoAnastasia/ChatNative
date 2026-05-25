import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// styles
import { COLORS } from '../../constants/colors';

type Props = {
  img?: any;
  isOnline?: boolean;
};

export const Avatar = ({ img: Img, isOnline = false }: Props) => {
  return (
    <View style={styles.avatar}>
      {isOnline && <View style={styles.onlineCircle} />}
      {Img ? (
        <Image source={Img} style={styles.avatarImage} />
      ) : (
        <View>
          <Text style={styles.userName}>S</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: COLORS.light.surface2,
  },
  onlineCircle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 11,
    height: 11,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1.5,
    backgroundColor: COLORS.success.success1,
  },
  userName: {
    fontSize: 14,
  },
  avatarImage: {
    width: 32,
    height: 32,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
});
