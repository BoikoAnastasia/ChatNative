import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
// styles
import { COLORS } from '../../constants/colors';

type Props = {
  title?: string;
  children?: ReactNode;
  right?: ReactNode;
};

export const AppHeader = ({ title, right, children }: Props) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.children}>{children}</View>
      <View style={styles.right}>{right}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 120,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.light.white,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  children: {},
  right: {
    flexDirection: 'row',
    gap: 16,
  },
});
