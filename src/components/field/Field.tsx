import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  children: ReactNode;
  title: string;
  required?: boolean;
};

export const Field = ({ children, title, required = false }: Props) => {
  return (
    <View style={styles.field}>
      <Text style={styles.title}>
        {title}
        {required && <Text>*</Text>}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    gap: 8,
  },
  title: {
    fontSize: 12,
  },
});
