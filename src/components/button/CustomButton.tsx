import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
// styles
import { COLORS } from '../../constants/colors';

type Props = {
  title?: string;
  svg?: React.ComponentType<SvgProps>;
  onPress: () => void;
  type?: 'big' | 'small';
};

export const CustomButton = ({
  title,
  onPress,
  svg: Icon,
  type = 'small',
}: Props) => {
  return (
    <Pressable style={[styles.button, styles[type]]} onPress={onPress}>
      {title && (
        <Text
          style={[
            styles.text,
            {
              color: type === 'big' ? COLORS.text.inversive : COLORS.text.text1,
            },
          ]}
        >
          {title}
        </Text>
      )}
      {Icon && <Icon width={32} height={32} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.light.surface2,
  },
  text: {
    fontSize: 16,
  },
  small: {
    width: 40,
    height: 40,
  },
  big: {
    width: '100%',
    height: 43,
    backgroundColor: COLORS.button.buttonPrimary,
  },
});
