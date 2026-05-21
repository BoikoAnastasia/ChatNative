import { StyleSheet, View } from 'react-native';
import { ReactNode } from 'react';
// styles
import { COLORS } from '../constants/colors';

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.white,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});
