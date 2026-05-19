import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
// styles
import { COLORS } from '../../constants/colors';

type Props = {
  title: string;
  right?: ReactNode;
};

export const AppHeader = ({ title, right }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.right}>{right}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
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

  right: {
    flexDirection: 'row',
    gap: 16,
  },
});
