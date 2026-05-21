import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
// img
import SearchIcon from '../../assets/icons/search.svg';
// styles
import { COLORS } from '../../constants/colors';

type Props = {
  isSearch?: boolean;
};

export const CustomInput = ({ isSearch = false }: Props) => {
  const [value, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      {isSearch && <SearchIcon style={styles.icon} />}
      <TextInput
        placeholder="Поиск..."
        style={styles.textInput}
        value={value}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 16,
    top: '50%',
    transform: [{ translateY: '-50%' }],
    zIndex: 1,
  },
  textInput: {
    width: '100%',
    padding: 10,
    paddingLeft: 45,
    paddingVertical: 20,
    minHeight: 56,
    borderRadius: 24,
    backgroundColor: COLORS.primary.surface2,
  },
});
