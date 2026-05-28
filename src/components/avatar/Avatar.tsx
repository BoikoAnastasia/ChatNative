import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// styles
import { COLORS } from '../../constants/colors';

type Props = {
  img?: any;
  isOnline?: boolean;
  type?: 'small' | 'default';
};

export const Avatar = ({
  img: Img,
  isOnline = false,
  type = 'default',
}: Props) => {
  return (
    <View style={[styles.avatar, styles[type]]}>
      {isOnline && <View style={styles.onlineCircle} />}
      {Img ? (
        <Image source={Img} style={styles.avatarImage} />
      ) : (
        <View>
          <Text
            style={[
              styles.userName,
              {
                fontSize: type === 'default' ? 14 : 12,
              },
            ]}
          >
            S
          </Text>
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
    borderRadius: 50,
    backgroundColor: COLORS.light.surface2,
  },
  default: {
    width: 32,
    height: 32,
  },
  small: {
    width: 24,
    height: 24,
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
    // fontSize: 14,
  },
  avatarImage: {
    width: 32,
    height: 32,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
});
