import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
// img
import SearchIcon from '../../assets/icons/search.svg';
// styles
import { COLORS } from '../../constants/colors';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  isSearch?: boolean;
  placeholder?: string;
  type?: 'white' | 'grey';
};

export const CustomInput = ({
  isSearch = false,
  placeholder = 'Поиск...',
  value,
  onChangeText,
  type = 'grey',
}: Props) => {
  return (
    <View style={styles.container}>
      {isSearch && <SearchIcon style={styles.icon} />}
      <TextInput
        placeholder={placeholder}
        style={[
          styles.textInput,
          styles[type],
          { paddingLeft: isSearch ? 45 : 16, borderRadius: isSearch ? 24 : 16 },
        ]}
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
    paddingVertical: 20,
    minHeight: 56,
  },
  white: {
    backgroundColor: COLORS.light.white,
  },
  grey: {
    backgroundColor: COLORS.primary.surface2,
  },
});
