import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import { SvgProps } from 'react-native-svg';

type Props = {
  title?: string;
  svg?: React.ComponentType<SvgProps>;
  onPress: () => void;
};

export const CustomButton = ({ title, onPress, svg: Icon }: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {title && <Text style={styles.text}>{title}</Text>}
      {Icon && <Icon width={32} height={32} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.light.surface2,
  },
  text: {
    fontSize: 16,
  },
});
